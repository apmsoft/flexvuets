export class SimpleAdapter {
  constructor(data, template, classlist = null) {
    this.onDataChanged = () => {};
    this.data = data;
    this.template = template;
    this.classlist = classlist;
  }
  getItemCount() {
    return this.data.length;
  }
  onCreateViewHolder(parent) {
    const htmlTagType = parent.tagName;
    const html = this.template.render({});
    let view = null;
    if (htmlTagType == 'TBODY' || htmlTagType == 'TABLE') {
      view = document.createElement('tr');
    } else
    if (htmlTagType == 'UL' || htmlTagType == 'OL') {
      view = document.createElement('li');
    } else
    {
      view = document.createElement('div');
    }
    view.innerHTML = html;
    parent.appendChild(view);
    return { view };
  }
  onBindViewHolder(holder, position) {
    // 데이터 가져오기
    const item = this.data[position];
    // HTML 생성 및 설정
    const html = this.template.render(item);
    holder.view.innerHTML = html;
    if (this.classlist) {
      const classes = this.classlist.split(' ').map((className) => className.trim());
      holder.view.classList.add(...classes); // 사용자가 제공한 애니메이션 클래스 추가
    }
  }
  appendData(data) {
    if (Array.isArray(data)) {
      this.data.push(...data);
    } else
    {
      this.data.push(data);
    }
    this.onDataChanged();
  }
  removeData(position) {
    if (position >= 0 && position < this.data.length) {
      this.data.splice(position, 1);
      this.onDataChanged();
    } else
    {
      console.error('데이터 제거 위치가 잘못되었습니다.');
    }
  }
  clearData() {
    this.data = [];
  }
  doOnDataChanged(callback) {
    this.onDataChanged = callback;
  }
}
export class RecyclerView {
  constructor(container, adapter, options = {}) {
    this.isHandlingScroll = false;
    this.renderedItems = new Set();
    this.prevScrollPosition = 0;
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
    const { itemCount = 10, bottomBuffer = 50, prepend = false, scrollCapture = null, response = {} } = options;
    this.options = { itemCount, bottomBuffer, prepend, response };
    this.adapter = adapter;
    this.scrollCaptureElement = scrollCapture ? document.querySelector(scrollCapture) : this.container;
    this.renderedItems.clear();
    this.render();
    this.scrollCaptureElement.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    // Listen for data changes
    this.adapter.doOnDataChanged(() => {
      this.render();
    });
    // Initialize scroll position callback
    this.onChangedScrollPosition((scrollPosition, render_count) => {});
  }
  render() {
    this.calculateInitialRenderItemCount();
    this.handleScroll();
  }
  calculateInitialRenderItemCount() {
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
  handleScroll() {
    if (this.isHandlingScroll) {
      return; // Ignore if already handling scroll
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
        } else
        {
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
  handleResize() {
    this.calculateInitialRenderItemCount();
    this.handleScroll();
  }
  addEventListener(eventName, selector, callback) {
    this.container.addEventListener(eventName, (event) => {
      const target = event.target;
      if (target.matches(selector)) {
        callback(target);
      } else
      {
        const item = target.closest(selector);
        if (item && item.matches(selector)) {
          callback(item);
        }
      }
    });
  }
  clear() {
    this.renderedItems.clear();
  }
  onChangedScrollPosition(callback) {
    this.scrollPositionCallback = callback;
  }
}