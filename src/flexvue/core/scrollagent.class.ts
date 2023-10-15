interface ScrollParams {
    top?: number;
    left?: number;
    behavior?: 'auto' | 'smooth';
}

type ScrollMode = 'vertical' | 'horizontal';

export default class ScrollAgent {
    private TAG: string;
    private version: string;
    private channel: string;
    private scrollerVertical: HTMLElement | null;
    private scrollerHorizontal: HTMLElement | null;
    private keys: { [key: number]: number };
    private supportsPassive: boolean;
    private wheelOpt: boolean | AddEventListenerOptions;
    private wheelEvent: string;
    private floatEl: HTMLElement | null;
    private floatElScrollPos: number;

    constructor(channel: string) {
        this.TAG = 'ScrollAgent';
        this.version = '1.2';
        this.channel = channel;
        this.scrollerVertical = null;
        this.scrollerHorizontal = null;
        this.keys = {37: 1, 38: 1, 39: 1, 40: 1};
        this.supportsPassive = false;
        this.wheelOpt = false;
        this.wheelEvent = 'mousewheel';
        this.floatEl = null;
        this.floatElScrollPos = 500;
    }

    addFloatListener(elId: string, pos: number, callback?: (el: HTMLElement) => void): void {
        const self = this;

        this.floatEl = document.querySelector<HTMLElement>(elId);
        if(this.floatEl)
        {
            self.floatElScrollPos = pos || 500;
            Handler.post(function(){
                if(!self.floatEl!.classList.contains('hidden')){
                    self.floatEl!.classList.add('hidden');
                }
            },1);

            if(typeof callback === 'function'){
                callback(this.floatEl);
            }
        }
    }

    addScrollListener(mode: ScrollMode, scrollTarget: string): void {
        if(mode === 'vertical'){
            this.scrollerVertical = document.querySelector<HTMLElement>(scrollTarget);
            if(this.scrollerVertical){
                this.scrollerVertical.dataset.scrollch = this.channel;
                this.startVertical();
            }
        } else if(mode === 'horizontal'){
            this.scrollerHorizontal = document.querySelector<HTMLElement>(scrollTarget);
            if(this.scrollerHorizontal){
                this.scrollerHorizontal.dataset.scrollch = this.channel;
                this.startHorizontal();
            }
        }
    }

    startVertical(): void {
        // 스크롤 캡쳐
        if (this.scrollerVertical) {
            this.scrollerVertical.addEventListener("scroll", (event: Event) => {
                const target = event.target as HTMLElement;
                const _ch: string | undefined = target.dataset.scrollch;
                let tpos: number = target.scrollTop;

                if (_ch !== 'undefined' && _ch === this.channel) {
                    ScrollObserver._setPos(this.channel, tpos);
                }

                // float Layout
                if (this.floatEl) {
                    if (tpos < this.floatElScrollPos) {
                        if (!this.floatEl.classList.contains('hidden')) {
                            this.floatEl.classList.add('hidden');
                        }
                    } else {
                        if (this.floatEl.classList.contains('hidden')) {
                            this.floatEl.classList.remove('hidden');
                        }
                    }
                }
            });

            // try {
            //     window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            //         get: () => { this.supportsPassive = true; }
            //     }));
            // } catch (e) { }

            this.wheelOpt = this.supportsPassive ? { passive: false } : false;
            this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        }
    }


    startHorizontal(): void {
        const self = this;
        if (this.scrollerHorizontal) {
            this.scrollerHorizontal.addEventListener("scroll", (event: Event) => {
                const target = event.target as HTMLElement;
                const _ch = target.dataset.scrollch;
                if (_ch === self.channel) {
                    // Log.d("+++++ >" + _ch + ' ' + tpos);
                    ScrollObserver._setPos(this.channel, this.scrollerHorizontal!.scrollLeft);
                }
            });
        }
    }

    getPos(): number {
        let pos : number = 0;
        try{
            pos = ScrollObserver._getPos (this.channel);
        }catch(e){
            Log.d(e);
        }
    return pos;
    }

    getPosById(target: string): number {
        let pos : number = 0;
        const obj = document.querySelector<HTMLElement>(`#${target}`);
        if(obj){
            pos = obj.offsetTop;
        }
    return pos;
    }

    resetPos(): void {
        ScrollObserver._setPos(this.channel,0);
    }

    scrollTo(params: ScrollParams, delaytime?: number): void {
        const self = this;
        const dtime : number = delaytime || 0;

        Handler.post(function(){
            if(self.scrollerVertical){
                self.scrollerVertical.scrollTo(params);
            }
        },dtime);
    }

    scrollToLeft(params: ScrollParams, delaytime?: number): void {
        const self = this;
        const dtime : number = delaytime || 0;
        Handler.post(function(){
            if(self.scrollerHorizontal){
                self.scrollerHorizontal.scrollTo(params);
            }
        },dtime);
    }

    scrollToBottom(delaytime?: number): void {
        const self = this;
        const dtime = delaytime || 0;

        if(self.scrollerVertical){
            Handler.post(function(){
                const pos = self.scrollerVertical?.scrollHeight;
                self.scrollerVertical?.scrollTo({top: pos});
            },dtime);
        }
    }

    preventDefault(e: Event): void {
        try{
            e.stopImmediatePropagation();
            e.preventDefault();
        }catch(e){

        }
    }

    preventDefaultForScrollKeys(e: KeyboardEvent): boolean | undefined {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }

    disableScroll(): void {
        if(this.scrollerVertical){
            this.scrollerVertical.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
            this.scrollerVertical.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
            // this.scrollerVertical.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
            this.scrollerVertical.addEventListener('touchmove', this.preventDefault, false); // mobile
            this.scrollerVertical.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
        }
    }

    enableScroll(): void {
        if(this.scrollerVertical){
            this.scrollerVertical.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            this.scrollerVertical.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
            // this.scrollerVertical.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
            this.scrollerVertical.removeEventListener('touchmove', this.preventDefault);
            this.scrollerVertical.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
        }
    }
}