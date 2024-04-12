

class ComponentActivity{
    private TAG : string;
    constructor(){
        this.TAG = 'page1';
    }
    doList (params : any | object = {}) {

        Log.v(this.TAG, 'doList', params);

        // 캐시메모리
        const cachedData = window.cacheMemory._get('/test/object') ?? '캐시데이터가 없거나 만료됨';
        Log.e('cache','/test/object', cachedData);
    }
    doPost (params : any | object = {}) {
        Log.v(this.TAG, 'doPost', params);
    }
    doEdit (params : any | object = {}) {
        Log.v(this.TAG, 'doEdit', params);
    }
};

export {ComponentActivity};