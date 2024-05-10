import {Template} from '@flexvue/types';

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

    // 데이터 추가 [{},{}],{}
    appendData(data: any | any[]): void;

    // 데이터 삭제
    removeData(position: number): void;

    // 데이터 비우기
    clearData(): void;

    // 데이터 변화 감지에 따른 콜백
    doOnDataChanged(callback: () => void): void;
}

export class SimpleAdapter implements Adapter {
    private data: any[];
    private template: Template;
    private classlist: string | null;
    private onDataChanged: () => void = () => {};

    constructor(data: any[], template: Template, classlist: string | null = null) {
        this.data = data;
        this.template = template;
        this.classlist = classlist;
    }

    getItemCount(): number {
        return this.data.length;
    }

    onCreateViewHolder(parent: HTMLElement): ViewHolder {
        const htmlTagType = parent.tagName;
        const html = this.template.render({});
        let view : HTMLElement | null = null;
        if(htmlTagType == 'TBODY' || htmlTagType == 'TABLE'){
            view = document.createElement('tr');
        }else if(htmlTagType == 'UL' || htmlTagType == 'OL'){
            view = document.createElement('li');
        }else {
            view = document.createElement('div');
        }
        view.innerHTML = html;
        parent.appendChild(view);
        return { view };
    }

    onBindViewHolder(holder: ViewHolder, position: number): void {
        // 데이터 가져오기
        const item = this.data[position];

        // HTML 생성 및 설정
        const html = this.template.render(item);
        holder.view.innerHTML = html;

        if (this.classlist) {
            const classes = this.classlist.split(' ').map(className => className.trim());
            holder.view.classList.add(...classes); // 사용자가 제공한 애니메이션 클래스 추가
        }
    }

    appendData(data: any | any[]): void {
        if (Array.isArray(data)) {
            this.data.push(...data);
        } else {
            this.data.push(data);
        }
        this.onDataChanged();
    }

    removeData(position: number): void {
        if (position >= 0 && position < this.data.length) {
            this.data.splice(position, 1);
            this.onDataChanged();
        } else {
            console.error('데이터 제거 위치가 잘못되었습니다.');
        }
    }

    clearData() : void{
        this.data = [];
    }

    doOnDataChanged(callback: () => void): void {
        this.onDataChanged = callback;
    }
}

export class RecyclerView {
    private adapter: Adapter;
    private container: HTMLElement;
    private scrollCaptureElement: HTMLElement;
    private isHandlingScroll: boolean = false;
    private renderedItems: Set<number> = new Set();
    private options: {
        itemCount: number;
        bottomBuffer: number;
        prepend?: boolean;
        response?: { [key: string]: number };
    };
    private prevScrollPosition: number = 0;
    private scrollPositionCallback?: (scrollPosition: number, rendered_count: number) => void;
    private pageSize: number = 50;

    constructor(
        container: string | HTMLElement,
        adapter: Adapter,
        options: {
            itemCount?: number;
            bottomBuffer?: number;
            prepend?: boolean;
            scrollCapture?: string | null;
            response?: { [key: string]: number };
        } = {}
    ) {
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
        this.renderedItems.clear();
        this.render();
        this.scrollCaptureElement.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));

        // Listen for data changes
        this.adapter.doOnDataChanged(() => {
            this.render();
        });

        // Initialize scroll position callback
        this.onChangedScrollPosition((scrollPosition: number, render_count: number) => {});
    }

    private render(): void {
        this.calculateInitialRenderItemCount();
        this.handleScroll();
    }

    private calculateInitialRenderItemCount(): void {
        const screenWidth = window.innerWidth;
        let itemCount = this.options.itemCount;

        // Check responsive options
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

        this.options.itemCount = itemCount;
    }

    private handleScroll(): void {
        if (this.isHandlingScroll) {
            return; // 이미 스크롤을 처리하고 있으면 무시
        }
        this.isHandlingScroll = true;

        const scrollPosition = this.scrollCaptureElement.scrollTop;
        if (scrollPosition !== this.prevScrollPosition) {
            this.prevScrollPosition = scrollPosition;
        }

        const containerHeight = this.container.clientHeight;
        const itemCount = this.adapter.getItemCount();
        const renderChunkSize = this.options.itemCount;
        const templateItem = this.adapter.onCreateViewHolder(this.container);
        let templateHeight = templateItem.view.getBoundingClientRect().height;
        templateItem.view.remove();
        const totalItemsVisible = Math.ceil(containerHeight / templateHeight);
        let startIndex = Math.floor(scrollPosition / templateHeight);
        let endIndex = Math.min(startIndex + totalItemsVisible + renderChunkSize, itemCount);

        if (scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
            endIndex = Math.min(endIndex + renderChunkSize, itemCount);
        }

        for (let i = startIndex; i < endIndex; i++) {
            if (!this.renderedItems.has(i)) {
                const holder = this.adapter.onCreateViewHolder(this.container);
                this.adapter.onBindViewHolder(holder, i);
                if (this.options.prepend) {
                    this.container.prepend(holder.view);
                } else {
                    this.container.appendChild(holder.view);
                }
                this.renderedItems.add(i);
            }
        }

        this.isHandlingScroll = false;

        // Call scroll position callback
        if (this.scrollPositionCallback) {
            this.scrollPositionCallback(scrollPosition, this.renderedItems.size);
        }
    }

    private handleResize(): void {
        this.calculateInitialRenderItemCount();
        this.handleScroll();
    }

    addEventListener(eventName: string, selector: string, callback: (element: HTMLElement) => void): void {
        this.container.addEventListener(eventName, (event: Event) => {
            const target = event.target as HTMLElement;

            if (target.matches(selector)) {
                callback(target);
            } else {
                const item = target.closest(selector);
                if (item && item.matches(selector)) {
                    callback(item as HTMLElement);
                }
            }
        });
    }

    clear(): void {
        this.renderedItems.clear();
    }

    onChangedScrollPosition(callback: (scrollPosition: number, rendered_count: number) => void): void {
        this.scrollPositionCallback = callback;
    }
}
