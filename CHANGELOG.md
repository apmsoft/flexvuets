# Changelog

## [3.0]
### - 2024-04-15
- Plugin CryptoES 암호화 알고리즘 라이브러리 추가
- Plugin CryptoES example 생성
- 다국어 리소트 로딩 v1, t1 예제 index.ts 기능 업데이트

### - 2024-04-13
- CacheMemory,CacheLocalStorage class 비동기 메소드 _getAsync 추가 및 _set 객체object 리턴으로 변경
- CacheMemory,CacheLocalStorage 비동기 메소드 : Promise 비동기 지원

### - 2024-04-12
- RecyclerView 실시간 스크롤 위치 확인 기능 추가
- RecyclerView example 예제 업데이트
- CacheMemory class new add : 휘발성 캐시 기능 (페이지를 새로고침할 경우 모두 사라지는 휘발성 캐시 기능 단, hash 경로로 이동할 경우 유지됨)
- CacheMemory class 예제 추가

### - 2024-04-09
- SimpleAdapter class 데이터 appendData(데이터추가), removeData(데이터삭제) 기능 추가 데이터에만 변화가 일어남

### - 2024-04-08
- CacheLocalStorage class 새로 추가
- CacheLocalStorage Example 예제 추가
- CacheLocalStorage 사용량 %로 출력되도록 업데이트
- babel.config.js, tsconfig.paths.json 에 RecyclerView,CacheLocalStorage path 설정
- install.sh 의 babel.config.js, tsconfig.paths.json path 추가
- plugins.txt 에 babel.config.js, tsconfig.paths.json 의 path 설정 정보 추가


### - 2024-04-06
- SimpleAdapter, RecyclerView class : 클릭 이벤트 등 패치
- RecyclerView : 출력 대상과 스크롤 대상을 별도로 설정 할 수 있도록 옵션 및 기능 추가
- SimpleAdapter : Template 설정 업데이트
- ListView, GridView 스크롤 관련 출력 업데이트

### - 2024-04-05
- install.sh : 명령어 설치 모음 파일
- v1 : 웹사이트 기본 샘플링 페이지 추가
- SimpleAdapter, RecyclerView class 추가 : 화면이 보이는 만큼 만 데이터 출력 후 스크롤 시 나머지 데이터 출력해 주는 기능