export class SimpleAdapter {
  constructor(data, template, classlist = null) {
    this.onDataChanged = () => {};
    this.total = 0;
    this.data = data;
    this.template = template;
    this.classlist = classlist;
    this.total = this.data.length;
  }
  getItemCount() {
    return this.total;
  }
  onCreateViewHolder(parentTagName, templateViewHolder) {
    let view;
    if (templateViewHolder) {
      view = templateViewHolder.view.cloneNode(true);
    } else
    {
      const html = this.template.render(typeof this.data[0] !== undefined ? this.data[0] : {});
      view = document.createElement(parentTagName);
      view.innerHTML = html;
    }
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
      this.total = this.total + data.length;
    } else
    {
      this.data.push(data);
      this.total = this.total + 1;
    }
    this.onDataChanged();
  }
  removeData(position) {
    if (position >= 0 && position < this.data.length) {
      this.data.splice(position, 1);
      this.total = this.total - 1;
      this.onDataChanged();
    } else
    {
      console.error('데이터 제거 위치가 잘못되었습니다.');
    }
  }
  clearData() {
    this.data = [];
    this.total = 0;
  }
  doOnDataChanged(callback) {
    this.onDataChanged = callback;
  }
}
export class RecyclerView {
  constructor(container, adapter, options = {}) {
    this.isHandlingScroll = false;
    this.renderedItems = new Set();
    this.templateHeight = 0;
    this.responsive_cnt = 0;
    this.prevScrollPosition = 0;
    this.firsted = false;
    if (typeof container === 'string') {
      const element = document.querySelector(container);
      if (!element) {
        throw new Error(`'${container}' 선택기가 있는 컨테이너 요소를 찾을 수 없습니다.`);
      }
      this.container = element;
    } else
    if (container instanceof HTMLElement) {
      this.container = container;
    } else
    {
      throw new Error('컨테이너 유형이 잘못되었습니다. 문자열 또는 HTMLElement가 필요합니다.');
    }
    const { itemCount = 10, bottomBuffer = 100, prepend = false, clientRectHeight = undefined, scrollCapture = null, response = {} } = options;
    this.options = { itemCount, bottomBuffer, clientRectHeight, prepend, response };
    this.adapter = adapter;
    this.scrollCaptureElement = scrollCapture ? document.querySelector(scrollCapture) : this.container;
    this.renderedItems.clear();
    // 최초 한 번만 호출하여 ViewHolder 생성
    this.calculateInitialRenderItemCount();
    const htmlTagType = this.container.tagName;
    this.containerTagName = htmlTagType === 'TBODY' || htmlTagType === 'TABLE' ? 'tr' : htmlTagType === 'UL' || htmlTagType === 'OL' ? 'li' : 'div';
    this.templateViewHolder = this.adapter.onCreateViewHolder(this.containerTagName, null);
    this.container.append(this.templateViewHolder.view);
    this.templateHeight = Math.floor(this.responsive_cnt > 0 ?
    this.options.clientRectHeight !== undefined ? this.options.clientRectHeight : this.getTotalHeight(this.templateViewHolder.view) / this.responsive_cnt :
    this.options.clientRectHeight !== undefined ? this.options.clientRectHeight : this.getTotalHeight(this.templateViewHolder.view));
    Log.d('templateHeight', this.templateHeight);
    this.templateViewHolder.view.remove();
    this.render();
    this.scrollCaptureElement.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    this.adapter.doOnDataChanged(() => {
      this.render();
    });
    this.onChangedScrollPosition((scrollPosition, render_count) => {});
  }
  // style margin,padding 계산 포함한 높이 계산
  getTotalHeight(element) {
    const style = getComputedStyle(element);
    const parsedHeight = parseFloat(style.height);
    const height = !isNaN(parsedHeight) && parsedHeight > 1 ? parsedHeight : element.getBoundingClientRect().height;
    const marginTop = parseFloat(style.marginTop);
    const marginBottom = parseFloat(style.marginBottom);
    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);
    return height + marginTop + marginBottom + paddingTop + paddingBottom;
  }
  render() {
    this.calculateInitialRenderItemCount();
    this.handleScroll();
  }
  calculateInitialRenderItemCount() {
    const screenWidth = this.container.clientWidth;
    this.responsive_cnt = 0;
    if (this.options.response) {
      const responsiveOptions = this.options.response;
      const breakpoints = Object.keys(responsiveOptions).sort((a, b) => parseInt(a) - parseInt(b));
      for (let i = breakpoints.length - 1; i >= 0; i--) {
        const breakpoint = parseInt(breakpoints[i]);
        if (screenWidth >= breakpoint) {
          this.responsive_cnt = responsiveOptions[breakpoint];
          Log.d('screenWidth', screenWidth, 'responsive_cnt', this.responsive_cnt);
          break;
        }
      }
    }
  }
  handleScroll() {
    if (this.isHandlingScroll) {
      return; // 이미 스크롤을 처리 중이면 무시
    }
    this.isHandlingScroll = true;
    const scrollPosition = this.scrollCaptureElement.scrollTop;
    const containerHeight = this.container.clientHeight;
    const itemCount = this.adapter.getItemCount();
    let startIndex = this.renderedItems.size > 0 ? this.renderedItems.size : 0;
    let endIndex = 0;
    if (this.firsted) {
      if (this.containerTagName == 'tr') {
        // Log.d(scrollPosition, this.container.scrollHeight, containerHeight, scrollPosition + this.scrollCaptureElement.offsetHeight, ' >= ',this.container.scrollHeight - this.options.bottomBuffer);
        if (scrollPosition + this.scrollCaptureElement.offsetHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
          endIndex = Math.min(startIndex + this.options.itemCount, itemCount);
        }
      } else
      {
        if (scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
          // Log.d(this.containerTagName, scrollPosition, scrollPosition + containerHeight,' >= ',this.container.scrollHeight - this.options.bottomBuffer);
          endIndex = Math.min(startIndex + this.options.itemCount, itemCount);
        }
      }
    } else
    {
      const totalItemsVisible = this.responsive_cnt > 0 ? Math.ceil(containerHeight / (this.templateHeight / this.responsive_cnt)) : Math.ceil(containerHeight / this.templateHeight);
      // Log.d('totalItemsVisible',totalItemsVisible);
      const visibleHeight = totalItemsVisible * this.templateHeight;
      endIndex = containerHeight <= visibleHeight ? Math.min(startIndex + totalItemsVisible + 2, itemCount) : Math.min(startIndex + totalItemsVisible, itemCount);
      // Log.d('endIndex',(this.options.clientRectHeight !==undefined) ? this.options.clientRectHeight * endIndex : endIndex );
    }
    for (let i = startIndex; i < endIndex; i++) {
      if (!this.renderedItems.has(i)) {
        const holder = this.adapter.onCreateViewHolder(this.containerTagName, this.templateViewHolder);
        this.adapter.onBindViewHolder(holder, i);
        if (this.options.prepend) {
          this.container.prepend(holder.view);
        } else
        {
          Log.d(holder.view);
          this.container.appendChild(holder.view);
        }
        this.renderedItems.add(i);
      }
    }
    this.isHandlingScroll = false;
    if (!this.firsted)
    this.firsted = true;
    // 스크롤 위치 콜백 호출
    if (this.scrollPositionCallback) {
      if (Math.floor(scrollPosition) != this.prevScrollPosition) {// 콜백 빈도수 줄이기
        this.scrollPositionCallback(scrollPosition, this.renderedItems.size);
        this.prevScrollPosition = Math.floor(scrollPosition);
      }
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