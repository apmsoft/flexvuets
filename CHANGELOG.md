# Changelog

## [3.1]
### - 2024-04-22
- AsyncTask option,headers 따로 또는 결합에 따른 버그 패치
- AsyncTask GET,POST 에 따른 option, params 자동 위치 설정 기능 추가

### - 2024-04-21
- Draggable Plugins New Add

### - 2024-04-17
- RecyclerView 업데이트, 테이블뷰 테스트 및 스크롤 테스트
- CacheMomory 버그 패치 및 예제 업데이트
- sweetalert2 alert 플러그인 설치 및 테스트
- micromodal 모달 플러그인 삭제

### - 2024-04-16
- micromodal 모달 플러그인 설치 및 테스트
- notyf Toast 플러그인 설치 및 테스트
- debug release 로 배포 할 경우 example 폴더는 제외 시키는 옵션 추가
- R.class 전역 static 클래스 위치 이동 import필요 없이 전역에서 사용 가능 및 window global 등록 제외
- Plugins @cevad-tokatli/date-picker 추가 및 테스트 빌드
- uglify-js 압축 프로그램 설치 dev
- release_minify.js 추가 (release 폴더의 t1,v1 의 js 파일 압축 기능)
- install.sh minify 관련 업데이트

### - 2024-04-15
- R.class new add : 리소스 arrays,sysmsg,strings,numbers 등 다국어 리소스 컨트롤 클래스 제공
- removde global Arrays,Sysmsg,Strings,Numbers 
- R global 등록, window.R 로 어디서든 실행 가능
- install.sh 설치 환경 업데이트 (R.class 관련 셋팅)
- 관련 t1, v1 업데이트
- 글로벌 클래스 App 클래스 자동 실행으로 등록 (언어등 자동으로 체크)
- example r.ts 다국어 테스트

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