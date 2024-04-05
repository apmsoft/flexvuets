export class SimpleAdapter {
  constructor(data, template, animationClass = null) {
    this.data = data;
    this.template = template;
    this.animationClass = animationClass;
  }
  getItemCount() {
    return this.data.length;
  }
  onCreateViewHolder(parent) {
    // ViewHolder를 생성하고 반환하는 코드를 여기에 추가합니다.
    const view = document.createElement('div');
    view.innerHTML = this.template({}); // 템플릿 함수를 호출하여 템플릿 문자열을 가져옵니다.
    parent.appendChild(view);
    return { view };
  }
  onBindViewHolder(holder, position) {
    // 데이터 가져오기
    const item = this.data[position];
    // HTML 생성 및 설정
    const html = this.template(item);
    holder.view.innerHTML = html;
    if (this.animationClass) {
      const classes = this.animationClass.split(' ').map((className) => className.trim());
      holder.view.classList.add(...classes); // 사용자가 제공한 애니메이션 클래스 추가
    }
  }
}
export class RecyclerView {
  constructor(container, adapter) {
    this.isHandlingScroll = false;
    this.renderedItems = new Set(); // 이미 출력된 항목의 인덱스를 추적합니다.
    this.firstRenderItemCount = 0;
    if (typeof container === 'string') {
      const element = document.querySelector(container);
      if (!element) {
        throw new Error(`Container element with selector '${container}' not found.`);
      }
      this.container = element;
    } else
    if (container instanceof HTMLElement) {
      this.container = container;
    } else
    {
      throw new Error('Invalid container type. Expected string or HTMLElement.');
    }
    this.adapter = adapter;
    this.render();
    this.container.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  render() {
    // 처음 렌더링할 때는 화면 크기만큼만 출력합니다.
    this.handleScroll();
    this.firstRenderItemCount = this.container.children.length;
  }
  handleScroll() {
    if (this.isHandlingScroll) {
      return; // 이미 스크롤 처리 중이면 무시합니다.
    }
    this.isHandlingScroll = true;
    // 현재 스크롤 위치를 가져옵니다.
    const scrollPosition = this.container.scrollTop;
    const containerHeight = this.container.clientHeight;
    const itemCount = this.adapter.getItemCount();
    const templateItem = this.adapter.onCreateViewHolder(this.container);
    const templateHeight = templateItem.view.getBoundingClientRect().height;
    templateItem.view.remove();
    // 스크롤 위치에 해당하는 항목의 시작 인덱스와 끝 인덱스를 계산합니다.
    let startIndex = Math.floor(scrollPosition / templateHeight);
    let endIndex = Math.min(itemCount, Math.ceil((scrollPosition + containerHeight) / templateHeight));
    // 스크롤이 bottom-50에 도달하면 추가 항목을 출력합니다.
    if (scrollPosition + containerHeight >= this.container.scrollHeight - 50) {
      endIndex = Math.min(itemCount, endIndex + 10);
    } else
    {
      endIndex = Math.min(this.firstRenderItemCount, endIndex);
    }
    // 이미 출력된 항목은 다시 출력하지 않도록 합니다.
    for (let i = startIndex; i < endIndex; i++) {
      if (!this.renderedItems.has(i)) {
        const holder = this.adapter.onCreateViewHolder(this.container);
        this.adapter.onBindViewHolder(holder, i);
        this.container.appendChild(holder.view);
        this.renderedItems.add(i); // 이미 출력된 항목을 추적합니다.
      }
    }
    this.isHandlingScroll = false;
    window.requestAnimationFrame(() => {
      this.handleScroll(); // 다음 프레임에서 스크롤을 처리합니다.
    });
  }
  handleResize() {
    this.handleScroll();
  }
  addEventListener(eventName, selector, callback) {
    this.container.addEventListener(eventName, (event) => {
      const target = event.target;
      if (target.matches(selector)) {
        callback(event);
      }
    });
  }
}