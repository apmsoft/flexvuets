class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'page2';
    }
    doList (params : any | object = {}) {
        Log.v(this.TAG, 'doList', params);

        // 캐시메모리
        const cachedData = window.cacheMemory._get('/test/array') ?? '캐시데이터가 없거나 만료됨';
        Log.v('cache','/test/array', cachedData);
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};