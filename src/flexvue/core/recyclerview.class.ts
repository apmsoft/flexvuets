import {Template} from '@flexvue/types';

interface ViewHolder {
    view: HTMLElement;
}

interface Adapter {
    // item count
    getItemCount(): number;

    // 새로운 ViewHolder를 생성하는 메서드.
    // @parent: ViewHolder의 부모 요소로 사용될 HTMLElement.
    onCreateViewHolder(parent: HTMLElement, templateViewHolder: ViewHolder | null): ViewHolder;

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
    public classlist: string | null;
    private onDataChanged: () => void = () => {};
    private total : number = 0;

    constructor(data: any[], template: Template, classlist: string | null = null) {
        this.data = data;
        this.template = template;
        this.classlist = classlist;
        this.total = this.data.length;
    }

    getItemCount(): number {
        return this.total;
    }

    onCreateViewHolder(parent: HTMLElement, templateViewHolder: ViewHolder): ViewHolder {
        const htmlTagType = parent.tagName;
        let view: HTMLElement;

        if (templateViewHolder) {
            view = templateViewHolder.view.cloneNode(true) as HTMLElement;
        } else {
            const html = this.template.render((typeof this.data[0] !==undefined) ? this.data[0] : {});
            view = (htmlTagType === 'TBODY' || htmlTagType === 'TABLE') ?  document.createElement('tr') : document.createElement(htmlTagType === 'UL' || htmlTagType === 'OL' ? 'li' : 'div');
            view.innerHTML = html;
        }
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
            this.total = this.total + data.length;
        } else {
            this.data.push(data);
            this.total = this.total + 1;
        }
        this.onDataChanged();
    }

    removeData(position: number): void {
        if (position >= 0 && position < this.data.length) {
            this.data.splice(position, 1);
            this.total = this.total - 1;
            this.onDataChanged();
        } else {
            console.error('데이터 제거 위치가 잘못되었습니다.');
        }
    }

    clearData() : void{
        this.data = [];
        this.total = 0;
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
    private templateViewHolder: ViewHolder;
    private templateHeight: number = 0;
    private options: {
        itemCount: number;
        bottomBuffer: number;
        clientRectHeight?:number;
        prepend?: boolean;
        scrollCapture?: string | null;
        response?: { [key: string]: number };
    };
    private responsive_cnt : number = 0;
    private prevScrollPosition: number = 0;
    private firsted : boolean = false;
    private scrollPositionCallback?: (scrollPosition: number, rendered_count: number) => void;

    constructor(
        container: string | HTMLElement,
        adapter: Adapter,
        options: {
            itemCount?: number;
            bottomBuffer?: number;
            prepend?: boolean;
            clientRectHeight?:number;
            scrollCapture?: string | null;
            response?: { [key: string]: number };
        } = {}
    ) {
        if (typeof container === 'string') {
            const element = document.querySelector(container);
            if (!element) {
                throw new Error(`'${container}' 선택기가 있는 컨테이너 요소를 찾을 수 없습니다.`);
            }
            this.container = element as HTMLElement;
        } else if (container instanceof HTMLElement) {
            this.container = container;
        } else {
            throw new Error('컨테이너 유형이 잘못되었습니다. 문자열 또는 HTMLElement가 필요합니다.');
        }

        const { itemCount = 10, bottomBuffer = 100, prepend = false, clientRectHeight=undefined,scrollCapture = null, response = {} } = options;
        this.options = { itemCount, bottomBuffer, clientRectHeight, prepend, response };

        this.adapter = adapter;
        this.scrollCaptureElement = scrollCapture ? document.querySelector(scrollCapture) as HTMLElement : this.container;
        this.renderedItems.clear();

        // 최초 한 번만 호출하여 ViewHolder 생성
        this.calculateInitialRenderItemCount();
        this.templateViewHolder = this.adapter.onCreateViewHolder(this.container, null);
        this.container.append(this.templateViewHolder.view);
        this.templateHeight = Math.floor((this.responsive_cnt > 0) ? 
            ((this.options.clientRectHeight !==undefined) ? this.options.clientRectHeight : this.getTotalHeight(this.templateViewHolder.view) /this.responsive_cnt) :
                ((this.options.clientRectHeight !==undefined) ? this.options.clientRectHeight : this.getTotalHeight(this.templateViewHolder.view)));
        Log.d('templateHeight',this.templateHeight);
        this.templateViewHolder.view.remove();

        this.render();
        this.scrollCaptureElement.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));

        this.adapter.doOnDataChanged(() => {
            this.render();
        });
        this.onChangedScrollPosition((scrollPosition: number, render_count: number) => {});
    }

    // style margin,padding 계산 포함한 높이 계산
    private getTotalHeight(element: HTMLElement): number {
        const style = getComputedStyle(element);
        const parsedHeight = parseFloat(style.height);
        const height = (!isNaN(parsedHeight) && parsedHeight > 1) ? parsedHeight : element.getBoundingClientRect().height;
        const marginTop = parseFloat(style.marginTop);
        const marginBottom = parseFloat(style.marginBottom);
        const paddingTop = parseFloat(style.paddingTop);
        const paddingBottom = parseFloat(style.paddingBottom);
        return (height + marginTop + marginBottom + paddingTop + paddingBottom);
    }

    private render(): void {
        this.calculateInitialRenderItemCount();
        this.handleScroll();
    }

    private calculateInitialRenderItemCount(): void {
        const screenWidth = this.container.clientWidth;
        this.responsive_cnt = 0;
        if (this.options.response) {
            const responsiveOptions = this.options.response;
            const breakpoints = Object.keys(responsiveOptions).sort((a, b) => parseInt(a) - parseInt(b));

            for (let i = breakpoints.length - 1; i >= 0; i--) {
                const breakpoint = parseInt(breakpoints[i]);
                if (screenWidth >= breakpoint) {
                    this.responsive_cnt = responsiveOptions[breakpoint];
                    Log.d('screenWidth',screenWidth,'responsive_cnt',this.responsive_cnt);
                    break;
                }
            }
        }
    }

    private handleScroll(): void {
        if (this.isHandlingScroll) {
            return; // 이미 스크롤을 처리 중이면 무시
        }
        this.isHandlingScroll = true;

        const scrollPosition = this.scrollCaptureElement.scrollTop;
        const containerHeight = this.container.clientHeight;
        const itemCount = this.adapter.getItemCount();
        let startIndex = (this.renderedItems.size > 0) ? this.renderedItems.size : 0;
        let endIndex = 0;

        if (this.firsted) {
            if(scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer){
                endIndex = Math.min(startIndex + this.options.itemCount, itemCount);
            }
        }else{
            const totalItemsVisible = (this.responsive_cnt > 0) ? Math.ceil(containerHeight / (this.templateHeight / this.responsive_cnt)) : Math.ceil(containerHeight / this.templateHeight);
            // Log.d('totalItemsVisible',totalItemsVisible);
            const visibleHeight : number = totalItemsVisible * this.templateHeight;
            endIndex = (containerHeight <= visibleHeight) ? Math.min(startIndex + totalItemsVisible + 2, itemCount) : Math.min(startIndex + totalItemsVisible, itemCount);
            // Log.d('endIndex',(this.options.clientRectHeight !==undefined) ? this.options.clientRectHeight * endIndex : endIndex );
        }

        for (let i = startIndex; i < endIndex; i++)
        {
            if (!this.renderedItems.has(i)) {
                const holder = this.adapter.onCreateViewHolder(this.container, this.templateViewHolder);
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
        if(!this.firsted) this.firsted = true;

        // 스크롤 위치 콜백 호출
        if (this.scrollPositionCallback) {
            if (Math.floor(scrollPosition) != this.prevScrollPosition) { // 콜백 빈도수 줄이기
                this.scrollPositionCallback(scrollPosition, this.renderedItems.size);
                this.prevScrollPosition = Math.floor(scrollPosition);
            }
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
