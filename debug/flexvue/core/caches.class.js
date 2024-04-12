export class CacheLocalStorage {
  constructor(prefix = '') {
    this.prefix = prefix;
  }
  getKey(key) {
    return `${this.prefix}${key}`;
  }
  getLocalStorageUsage() {
    // 로컬 스토리지 사용량 가져오기
    const totalBytes = 5 * 1024 * 1024; // 로컬 스토리지의 최대 크기 (5MB)
    const usedBytes = JSON.stringify(localStorage).length;
    return usedBytes / totalBytes * 100;
  }
  checkLocalStorageLimit() {
    const usage = this.getLocalStorageUsage();
    if (usage >= 1) {
      throw new Error('로컬 스토리지 용량 초과');
    }
  }
  // @lifetimesec : 초
  _set(key, data, lifetimesec = 0) {
    this.checkLocalStorageLimit(); // 용량 초과 확인
    const cacheItem = {
      data: typeof data === 'string' ? data : JSON.stringify(data),
      expiry: lifetimesec > 0 ? Date.now() + lifetimesec * 1000 : 0
    };
    localStorage.setItem(this.getKey(key), JSON.stringify(cacheItem));
  }
  _get(key) {
    const cacheItemString = localStorage.getItem(this.getKey(key));
    if (cacheItemString) {
      const cacheItem = JSON.parse(cacheItemString);
      if (cacheItem.expiry === 0 || cacheItem.expiry > Date.now()) {
        return this.autoConvertDataType(cacheItem.data);
      } else
      {
        this._delete(key);
      }
    }
    return null;
  }
  autoConvertDataType(data) {
    if (typeof data === 'string') {
      // JSON 문자열인 경우 다시 파싱하여 반환
      try {
        return JSON.parse(data);
      }
      catch (error) {
        // 파싱에 실패하면 그대로 반환
        return data;
      }
    }
    // 문자열이 아닌 경우 그대로 반환
    return data;
  }
  _delete(key) {
    localStorage.removeItem(this.getKey(key));
  }
  _clear() {
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
  constructor(prefix = '') {
    this.prefix = prefix;
    this.cache = {};
  }
  getKey(key) {
    return `${this.prefix}${key}`;
  }
  // @lifetimesec : 초
  _set(key, data, lifetimesec = 0) {
    const cacheItem = {
      data,
      expiry: lifetimesec > 0 ? Date.now() + lifetimesec * 1000 : 0
    };
    this.cache[this.getKey(key)] = cacheItem;
  }
  _get(key) {
    const cacheItem = this.cache[this.getKey(key)];
    if (cacheItem && (cacheItem.expiry === 0 || cacheItem.expiry > Date.now())) {
      return this.autoConvertDataType(cacheItem.data);
    } else
    {
      this._delete(key);
      return null;
    }
  }
  autoConvertDataType(data) {
    if (typeof data === 'string') {
      try {
        return JSON.parse(data);
      }
      catch (error) {
        return data;
      }
    }
    return data;
  }
  _delete(key) {
    delete this.cache[this.getKey(key)];
  }
  _clear() {
    for (const key in this.cache) {
      if (key.startsWith(this.prefix)) {
        delete this.cache[key];
      }
    }
  }
}