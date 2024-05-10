import Forms from "../../flexvue/core/forms.class.js";
class HeaderActivity {
  constructor() {
    this.TAG = 'MainActivity';
  }
  run() {
    const btnHome = document.querySelector('#btn-home');
    const logBI = document.querySelector('#log-bi');
    const layTopSearchContainer = document.querySelector('#lay_top_search_container');
    const btnTopSearchOpen = document.querySelector('#btn-top-search-open');
    const btnTopSearchClose = document.querySelector('#btn-top-search-close');
    const inputTopQ = document.querySelector('#topq');
    const layoutMainScroll = document.querySelector('#left-layout--main');
    const layLeftLayoutHeader = document.querySelector('#left--layout--header');
    if (btnHome) {
      btnHome.addEventListener('click', function () {
        window.location.href = "./index.html#/";
      });
    }
    if (btnTopSearchOpen) {
      btnTopSearchOpen.addEventListener('click', function () {
        if (!btnTopSearchOpen.classList.contains('hidden')) {
          this.classList.add('hidden');
          layTopSearchContainer.classList.remove('hidden', 'lg:hidden');
          btnTopSearchClose.classList.remove('hidden');
          inputTopQ.focus();
        }
      });
    }
    if (btnTopSearchClose) {
      btnTopSearchClose.addEventListener('click', function () {
        if (!this.classList.contains('hidden')) {
          this.classList.add('hidden');
          layTopSearchContainer.classList.add('hidden', 'lg:hidden');
          btnTopSearchOpen.classList.remove('hidden');
        }
      });
    }
    // form event
    new Forms('#theSearchFormTop').doSubmit((form_params) => {
      Log.d(form_params);
      // reset
      btnTopSearchClose.classList.add('hidden');
      layTopSearchContainer.classList.add('hidden');
      btnTopSearchOpen.classList.remove('hidden');
      inputTopQ.value = "";
      // move
      // window.location.hash = `#/search/do?q=${encodeURIComponent(form_params.topq)}`;
    });
    // 스크롤 포지션
    let is_scrollen = false;
    let tpos = 0;
    layoutMainScroll.addEventListener("scroll", function (event) {
      tpos = this.scrollTop;
      // Log.d(tpos);
      Handler.post(function () {
        is_scrollen = tpos >= 100 ? true : false;
        if (is_scrollen) {
          layLeftLayoutHeader.classList.remove('text-blue-lightd6');
          layLeftLayoutHeader.classList.add('bg-white', 'text-gray-dark');
          logBI.src = 'images/logoc.png';
        } else
        {
          layLeftLayoutHeader.classList.remove('bg-white', 'text-gray-dark');
          layLeftLayoutHeader.classList.add('text-blue-lightd6');
          logBI.src = 'images/logow.png';
        }
      }, 100);
    });
  }
}
export { HeaderActivity };