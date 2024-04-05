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
    private template: (data: any) => string;
    private animationClass: string | null;

    constructor(data: any[], template: (data: any) => string, animationClass: string | null = null) {
        this.data = data;
        this.template = template;
        this.animationClass = animationClass;
    }

    getItemCount(): number {
        return this.data.length;
    }

    onCreateViewHolder(parent: HTMLElement): ViewHolder {
        // ViewHolder를 생성하고 반환하는 코드를 여기에 추가
        const view = document.createElement('div');
        view.innerHTML = this.template({}); // 템플릿 함수를 호출하여 템플릿 문자열
        parent.appendChild(view);
        return { view };
    }

    onBindViewHolder(holder: ViewHolder, position: number): void {
        // 데이터 가져오기
        const item = this.data[position];

        // HTML 생성 및 설정
        const html = this.template(item);
        holder.view.innerHTML = html;
        if (this.animationClass) {
            const classes = this.animationClass.split(' ').map(className => className.trim());
            holder.view.classList.add(...classes); // 사용자가 제공한 애니메이션 클래스 추가
        }
    }
}


export class RecyclerView {
    private adapter: Adapter;
    private container: HTMLElement;
    private isHandlingScroll: boolean = false;
    private renderedItems: Set<number> = new Set(); // 이미 출력된 항목의 인덱스를 추적용
    private firstRenderItemCount: number = 0;
    private options: {
        itemCount: number; // 스크롤할때 마다 출력할 item 갯수
        bottomBuffer: number; // bottom 스크롤 간격 조정
        prepend?: boolean; // 새 항목을 prepend할지 여부를 결정하는 옵션 기본 append
    };

    constructor(
        container: string | HTMLElement, 
        adapter: Adapter, 
        options: { itemCount?: number; bottomBuffer?: number; prepend?: boolean } = {}
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

        const { itemCount = 10, bottomBuffer = 50, prepend = false } = options;
        this.options = { itemCount, bottomBuffer, prepend };

        this.adapter = adapter;
        this.render();
        this.container.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    private render(): void {
        // 처음 렌더링할 때는 화면 크기만큼만 출력합니다.
        this.handleScroll();
        this.firstRenderItemCount = this.container.children.length;
    }

    private handleScroll(): void {
        if (this.isHandlingScroll) {
            return; // 이미 스크롤 처리 중이면 무시
        }
        this.isHandlingScroll = true;

        // 현재 스크롤 위치
        const scrollPosition = this.container.scrollTop;
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

        // 스크롤이 bottom-50에 도달하면 추가 항목을 출력
        if (scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
            endIndex = Math.min(itemCount, endIndex + this.options.itemCount);
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

    private handleResize(): void {
        this.handleScroll();
    }

    addEventListener(eventName: string, selector: string, callback: (event: Event) => void): void {
        this.container.addEventListener(eventName, (event: Event) => {
            const target = event.target as HTMLElement;
            if (target.matches(selector)) {
                callback(event);
            }
        });
    }
}
