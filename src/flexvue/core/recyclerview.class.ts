import { Template as InterfaceTemplate } from '@flexvue/types';

interface ViewHolder {
    view: HTMLElement;
}

interface Adapter {
    // item count
    getItemCount(): number;

    // 새로운 ViewHolder를 생성하는 메서드.
    // RecyclerView가 새로운 아이템을 표시할 때마다 호출.
    // @parent: ViewHolder의 부모 요소로 사용될 HTMLElement.
    onCreateViewHolder(parent: HTMLElement): ViewHolder;

    // 지정된 위치의 데이터를 ViewHolder에 바인딩
    // @holder: 데이터를 표시할 ViewHolder 객체
    // @position: 바인딩할 데이터의 위치
    onBindViewHolder(holder: ViewHolder, position: number): void;
}

interface DataItem {
    [key: string]: any;
}

export class SimpleAdapter implements Adapter {
    private data: any[];
    private template: InterfaceTemplate;
    private animationClass: string | null;

    constructor(data: any[], template: InterfaceTemplate, animationClass: string | null = null) {
        this.data = data;
        this.template = template;
        this.animationClass = animationClass;
    }

    getItemCount(): number {
        return this.data.length;
    }

    onCreateViewHolder(parent: HTMLElement): ViewHolder {
        console.log('onCreateViewHolder');
        const html = this.template.render({});
        const view = document.createElement('div');
        view.innerHTML = html;
        parent.appendChild(view);
        return { view };
    }

    onBindViewHolder(holder: ViewHolder, position: number): void {
        console.log('onBindViewHolder');
        // 데이터 가져오기
        const item = this.data[position];

        // HTML 생성 및 설정
        const html = this.template.render(item);
        holder.view.innerHTML = html;

        if (this.animationClass) {
            const classes = this.animationClass.split(' ').map(className => className.trim());
            holder.view.classList.add(...classes); // 사용자가 제공한 애니메이션 클래스 추가
        }
    }
}

export class RecyclerView {
    private adapter             : Adapter;
    private container           : HTMLElement;
    private scrollCaptureElement: HTMLElement;
    private isHandlingScroll    : boolean = false;
    private renderedItems       : Set<number> = new Set(); // 이미 출력된 항목의 인덱스를 추적용
    private firstRenderItemCount: number = 0;
    private options             : {
        itemCount: number; // 스크롤할때 마다 출력할 item 갯수
        bottomBuffer: number; // bottom 스크롤 간격 조정
        prepend?: boolean; // 새 항목을 prepend할지 여부를 결정하는 옵션 기본 append
        response?: { [key: string]: number }; // 가로 항목 수에 대한 반응형 옵션
    };

    constructor(
        container: string | HTMLElement,
        adapter: Adapter,
        options: {
            itemCount?: number;
            bottomBuffer?: number;
            prepend?: boolean;
            scrollCapture?: string | null ;
            response?: { [key: string]: number }
        } = {}
    ){
        if (typeof container === 'string') {
            const element = document.querySelector(container);
            if (!element) {
                throw new Error(`Container element with selector '${container}' not found.`);
            }
            this.container = element as HTMLElement;
        } else if (container instanceof HTMLElement) {
            this.container = container;
        } else {
            throw new Error('Invalid container type. Expected string or HTMLElement.');
        }

        const { itemCount = 10, bottomBuffer = 50, prepend = false, scrollCapture = null, response = {} } = options;
        this.options = { itemCount, bottomBuffer, prepend, response };

        this.adapter = adapter;
        this.scrollCaptureElement = scrollCapture ? document.querySelector(scrollCapture) as HTMLElement : this.container;
        this.render();
        this.container.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    private render(): void {
        // 처음 렌더링할 때는 화면 크기만큼만 출력합니다.
        this.calculateInitialRenderItemCount();
        this.handleScroll();
        this.firstRenderItemCount = this.container.children.length;
    }

    private calculateInitialRenderItemCount(): void {
        const screenWidth = window.innerWidth;
        let itemCount = this.options.itemCount;

        // Check responsive options for horizontal item count
        if (this.options.response) {
            const responsiveOptions = this.options.response;
            const breakpoints = Object.keys(responsiveOptions).sort((a, b) => parseInt(a) - parseInt(b));

            for (let i = breakpoints.length - 1; i >= 0; i--) {
                const breakpoint = parseInt(breakpoints[i]);
                if (screenWidth >= breakpoint) {
                    itemCount = responsiveOptions[breakpoint];
                    break;
                }
            }
        }

        // Update item count
        this.options.itemCount = itemCount;
    }

    private handleScroll(): void {
        if (this.isHandlingScroll) {
            return; // 이미 스크롤 처리 중이면 무시
        }
        this.isHandlingScroll = true;

        // 현재 스크롤 위치
        const scrollPosition = this.scrollCaptureElement.scrollTop;
        const containerHeight = this.container.clientHeight;

        const itemCount = this.adapter.getItemCount();
        const templateItem = this.adapter.onCreateViewHolder(this.container);
        const templateHeight = templateItem.view.getBoundingClientRect().height;
        templateItem.view.remove();

        // 스크롤 위치에 해당하는 항목의 시작 인덱스와 끝 인덱스를 계산
        let startIndex = Math.floor(scrollPosition / templateHeight);
        let endIndex = Math.min(
            itemCount,
            Math.ceil((scrollPosition + containerHeight) / templateHeight)
        );

        // 가로 사이즈에 따른 추가 항목 출력
        const responsiveItemCount = this.getResponsiveItemCount();
        if (scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
            endIndex = Math.min(itemCount, endIndex + responsiveItemCount);
        } else {
            endIndex = Math.min(this.firstRenderItemCount, endIndex);
        }

        // 이미 출력된 항목은 다시 출력하지 않도록
        for (let i = startIndex; i < endIndex; i++) {
            if (!this.renderedItems.has(i)) {
                const holder = this.adapter.onCreateViewHolder(this.container);
                this.adapter.onBindViewHolder(holder, i);
                if (this.options.prepend) {
                    // prepend 옵션이 true이면 새 항목을 앞쪽에 추가합니다.
                    this.container.prepend(holder.view);
                } else {
                    // 그렇지 않으면 기존 로직대로 append 합니다.
                    this.container.appendChild(holder.view);
                }
                this.renderedItems.add(i); // 이미 출력된 항목을 추적
            }
        }

        this.isHandlingScroll = false;
        window.requestAnimationFrame(() => {
            this.handleScroll();
        });
    }

    private getResponsiveItemCount(): number {
        const screenWidth = window.innerWidth;
        let responsiveItemCount = this.options.itemCount;

        if (this.options.response) {
            const breakpoints = Object.keys(this.options.response)
                .map(Number)
                .sort((a, b) => a - b);

            for (const breakpoint of breakpoints) {
                if (screenWidth >= breakpoint) {
                    responsiveItemCount = this.options.response[breakpoint];
                } else {
                    break;
                }
            }
        }

        return responsiveItemCount;
    }


    private handleResize(): void {
        this.calculateInitialRenderItemCount();
        this.handleScroll();
    }

    addEventListener(eventName: string, selector: string, callback: (element: HTMLElement) => void): void {
        this.container.addEventListener(eventName, (event: Event) => {
            const target = event.target as HTMLElement;
    
            // 클릭 이벤트가 발생한 요소가 주어진 selector에 해당하는지 확인
            if (target.matches(selector)) {
                callback(target);
            } else {
                // 클릭 이벤트가 발생한 요소의 부모 요소 중 가장 가까운 .item 클래스를 가진 요소를 찾음
                const item = target.closest(selector);
                console.log(item);
                if (item && item.matches(selector)) {
                    console.log('>>>>');
                    callback(item as HTMLElement);
                }
            }
        });
    }

}
