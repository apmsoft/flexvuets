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
  doOnDataChanged(callback) {
    this.onDataChanged = callback;
  }
}
export class RecyclerView {
  constructor(container, adapter, options = {}) {
    this.isHandlingScroll = false;
    this.renderedItems = new Set(); // 이미 출력된 항목의 인덱스를 추적용
    this.firstRenderItemCount = 0;
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
    this.firstRenderItemCount = 0;
    this.container.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    // 데이터 변화 감지
    this.adapter.doOnDataChanged(() => {
      this.render();
    });
  }
  render() {
    // 처음 렌더링할 때는 화면 크기만큼만 출력합니다.
    this.calculateInitialRenderItemCount();
    this.handleScroll();
    this.firstRenderItemCount = this.container.children.length;
  }
  calculateInitialRenderItemCount() {
    const screenWidth = window.innerWidth;
    let itemCount = this.options.itemCount;
    // 가로 항목 수에 대한 반응형 옵션 확인
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
  handleScroll() {
    if (this.isHandlingScroll) {
      return; // 이미 스크롤 처리 중이면 무시
    }
    this.isHandlingScroll = true;
    // 현재 스크롤 위치
    const scrollPosition = this.scrollCaptureElement.scrollTop;
    if (scrollPosition !== this.prevScrollPosition && this.scrollPositionCallback) {
      this.scrollPositionCallback(scrollPosition, this.renderedItems.size); // Callback with the current scroll position
      this.prevScrollPosition = scrollPosition; // Update previous scroll position
    }
    const containerHeight = this.container.clientHeight;
    const itemCount = this.adapter.getItemCount();
    const templateItem = this.adapter.onCreateViewHolder(this.container);
    let templateHeight = templateItem.view.getBoundingClientRect().height;
    templateItem.view.remove();
    const responsiveItemCount = this.getResponsiveItemCount();
    templateHeight = responsiveItemCount > 1 ? templateHeight / responsiveItemCount : templateHeight;
    // 스크롤 위치에 해당하는 항목의 시작 인덱스와 끝 인덱스를 계산
    let startIndex = Math.floor(scrollPosition / templateHeight);
    let endIndex = Math.min(itemCount, responsiveItemCount > 1 ? startIndex + this.options.itemCount + responsiveItemCount : Math.ceil((scrollPosition + containerHeight) / templateHeight));
    // 가로 사이즈에 따른 추가 항목 출력
    if (scrollPosition + containerHeight >= this.container.scrollHeight - this.options.bottomBuffer) {
      endIndex = Math.min(itemCount, responsiveItemCount > 1 ? endIndex + +this.options.itemCount + responsiveItemCount : endIndex + this.options.itemCount);
    } else
    {
      endIndex = Math.min(this.firstRenderItemCount, endIndex);
    }
    // 이미 출력된 항목은 다시 출력하지 않도록
    for (let i = startIndex; i < endIndex; i++) {
      if (!this.renderedItems.has(i)) {
        const holder = this.adapter.onCreateViewHolder(this.container);
        this.adapter.onBindViewHolder(holder, i);
        if (this.options.prepend) {
          // prepend
          this.container.prepend(holder.view);
        } else
        {
          // append
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
  getResponsiveItemCount() {
    const containerWidth = this.container.clientWidth; // 컨테이너의 너비를 가져옴
    let responsiveItemCount = 1; // 기본값으로 1 설정
    if (this.options.response) {
      const breakpoints = Object.keys(this.options.response).
      map(Number).
      sort((a, b) => a - b);
      for (const breakpoint of breakpoints) {
        if (containerWidth >= breakpoint) {
          responsiveItemCount = this.options.response[breakpoint];
        } else
        {
          break;
        }
      }
    }
    return responsiveItemCount;
  }
  handleResize() {
    this.calculateInitialRenderItemCount();
    this.handleScroll();
  }
  addEventListener(eventName, selector, callback) {
    this.container.addEventListener(eventName, (event) => {
      const target = event.target;
      // 클릭 이벤트가 발생한 요소가 주어진 selector에 해당하는지 확인
      if (target.matches(selector)) {
        callback(target);
      } else
      {
        // 클릭 이벤트가 발생한 요소의 부모 요소 중 가장 가까운 selector 가진 요소를 찾음
        const item = target.closest(selector);
        if (item && item.matches(selector)) {
          callback(item);
        }
      }
    });
  }
  onChangedScrollPosition(callback) {
    this.scrollPositionCallback = callback;
  }
}