interface CacheItem {
    data: any;
    expiry: number;
}

export class CacheLocalStorage {
    constructor(private prefix: string = '') {}

    private getKey(key: string): string {
        return `${this.prefix}${key}`;
    }

    public getLocalStorageUsage(): number {
        // 로컬 스토리지 사용량 가져오기
        const totalBytes = 5 * 1024 * 1024; // 로컬 스토리지의 최대 크기 (5MB)
        const usedBytes = JSON.stringify(localStorage).length;
        return (usedBytes / totalBytes) * 100;
    }

    private checkLocalStorageLimit(): void {
        const usage = this.getLocalStorageUsage();
        if (usage >= 1) {
            throw new Error('로컬 스토리지 용량 초과');
        }
    }

    // @lifetimesec : 초
    public _set(key: string, data: string | object | any[], lifetimesec: number = 0): CacheLocalStorage {
        this.checkLocalStorageLimit(); // 용량 초과 확인
        const cacheItem: CacheItem = {
            data: typeof data === 'string' ? data : JSON.stringify(data),
            expiry: lifetimesec > 0 ? Date.now() + lifetimesec * 1000 : 0,
        };
        localStorage.setItem(this.getKey(key), JSON.stringify(cacheItem));

    return this;
    }

    public _get(key: string): any {
        const cacheItemString = localStorage.getItem(this.getKey(key));
        if (cacheItemString) {
            const cacheItem: CacheItem = JSON.parse(cacheItemString);
            if (cacheItem.expiry === 0 || cacheItem.expiry > Date.now()) {
                return this.autoConvertDataType(cacheItem.data);
            } else {
                this._delete(key);
            }
        }
        return null;
    }

    // 비동기
    public async _getAsync(key: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            try {
                const cacheItemString = localStorage.getItem(this.getKey(key));
                if (cacheItemString) {
                    const cacheItem: CacheItem = JSON.parse(cacheItemString);
                    if (cacheItem.expiry === 0 || cacheItem.expiry > Date.now()) {
                        resolve(this.autoConvertDataType(cacheItem.data));
                    } else {
                        this._delete(key);
                        resolve(null);
                    }
                } else {
                    resolve(null);
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    private autoConvertDataType(data: any): any {
        if (typeof data === 'string') {
            // JSON 문자열인 경우 다시 파싱하여 반환
            try {
                return JSON.parse(data);
            } catch (error) {
                // 파싱에 실패하면 그대로 반환
                return data;
            }
        }
        // 문자열이 아닌 경우 그대로 반환
        return data;
    }

    public _delete(key: string): void {
        localStorage.removeItem(this.getKey(key));
    }

    public _clear(): void {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        }
    }
}

// browser memory
export class CacheMemory {
    private cache: { [key: string]: CacheItem } = {};

    constructor(private prefix: string = '') {}

    private getKey(key: string): string {
        return `${this.prefix}${key}`;
    }

    // @lifetimesec : 초
    public _set(key: string, data: any, lifetimesec: number = 0): CacheMemory {
        const cacheItem: CacheItem = {
            data: typeof data === 'string' ? data : JSON.stringify(data),
            expiry: lifetimesec > 0 ? Date.now() + lifetimesec * 1000 : 0,
        };
        this.cache[this.getKey(key)] = cacheItem;

    return this;
    }

    public _get(key: string): any {
        const cacheItem = this.cache[this.getKey(key)];
        if (cacheItem && (cacheItem.expiry === 0 || cacheItem.expiry > Date.now())) {
            return this.autoConvertDataType(cacheItem.data);
        } else {
            this._delete(key);
            return null;
        }
    }

    // 비동기
    public async _getAsync(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const cacheItem = this.cache[this.getKey(key)];
            if (cacheItem && (cacheItem.expiry === 0 || cacheItem.expiry > Date.now())) {
                resolve(this.autoConvertDataType(cacheItem.data));
            } else {
                this._delete(key);
                resolve(null);
            }
        });
    }

    private autoConvertDataType(data: any): any {
        if (typeof data === 'string') {
            try {
                return JSON.parse(data);
            } catch (error) {
                return data;
            }
        }
        return data;
    }

    public _delete(key: string): void {
        delete this.cache[this.getKey(key)];
    }

    public _clear(): void {
        for (const key in this.cache) {
            if (key.startsWith(this.prefix)) {
                delete this.cache[key];
            }
        }
    }
}
