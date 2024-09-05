# Changelog

## [3.4.2]

### - 2024-09-04
- vscode sftp.json 업데이트된 파일만 서버 전송 하도록 하는 옵션 "syncMode": "update"

### - 2024-09-04
- vscode sftp.json ignore 설정 및 watcher 설정 정보 옵션 추가

### - 2024-08-22
- tailwind.config.js 모니터링 node_modules 디렉토리 탐색 제외

### - 2024-08-20
- flexvue.ts Activity class 전체 패치

### - 2024-08-18
- flexvue.ts onBackPressed 메소드 Activit::setStateActivity 관련 업데이트
- core/Form.class::getTargetFromDatas 메소드 추가

### - 2024-08-17
- 외부 플러그인 typed.js 추가(타이핑 효과)
- install.sh 버그 수정

### - 2024-08-10
- src 파일수정 체크 및 자동 빌드 설정 : nodemon.json, npm install --save-dev nodemon@latest, npm run debug:watch 추가

### - 2024-07-13
- Activity onStart createPanel() 에 flex css className 추가
- Activity.setStateHistory 관련 기능 업데이트
- Activity 패널 ID 자동설정에서 사용자등록으로 변경 (v3.4)

### - 2024-06-25
- tailwindcss config.js h1 ~ h6 크기 정의 추가

### - 2024-06-13
- fastRouter new 선언된 객체도 등록할 수 있도록 업데이트

### - 2024-06-11
- HtmlPrintTypes = 'inner' | 'prepend' | 'append' | 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend' 타입 설정 추가

### - 2024-06-04
- App setResoures 풀경로 입력으로 변경 (다양한 경로에 따른 변화대응)

### - 2024-06-03
- Activity.class setStateHistory, setStateActivity 함수 추가
    - setStateHistory : 현재 경로를 등록
    - setStateActivity :  현재 클래스를 등록
    - ㅇㅖㅈㅔ ㅈㅏㄱㅅㅓㅇ

- ElementsMangager div,ul,li,textarea,select,button,radio,checkbox,image classList 추가 삭제 기능 및 contains 기능 추가
- ElementsMangager ElementImage class new add

### - 2024-06-01
- v3.2 -> v3.3 업그레이드
- Activity.class new version 패널 액티비티 뷰 무한 생성 및 재활용, 에니메이션 등록 기능
- 전쳬 예제 업데이트
- Activity.clas url object type 으로 업데이트
- Activity.class animation time 설정
- Activity.class back key 이전 url 주소 캡쳐
- ElementManager * get() 함수 추가 기능 : target Object HTMLElement 받기

### - 2024-05-31
- ElementDiv,ElementUL,ElementLi style 메소드 기능 추가
- App class 에 setLanguages,setResoures,run 메소드 기능 추가 (초기 document.addEventListener("DOMContentLoaded") 작업 및 적용언어,리소스등록 기능)
- 예제 전체 수정

### - 2024-05-30
- ElementQuery class new add each 함수 기능 추가
- CreateComponents,ElementsComponents class export 시킴

### - 2024-05-27
- 리터럴 템플릿 HTML 하이라이트 볼 수 있도록 추가 (https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)

### - 2024-05-26
- ElementsOptions 클래스 추가 엘레렌트 타입에 따라 options 항목을 지정 할 수 있도록 업데이트
- ElementsAttributeOptions 클래스 추가
- ElementsCreate 와 ElementsHtml 역할 분리
- ElementsHtml attr, rmAttr 기능 추가
- Elements Components 예제 업데이트
- ElementsHtml.class 에서 ElementsManager.class 으로 클래스 네이밍 변경
- 불필요한 파일 제거

### - 2024-05-25
- ElementsTypes.interface InputTypeTypes,ButtonTypeTypes 항목 추가
- example/components/components_template 예제 업데이트
- ElementsTypes.interface update
- ElementsComponents min max remove
- ElementInput min max add

### - 2024-05-24
- ElementsHtml.class, ElementsTypes.interface new add
- HTMLElement 생성 및 이벤트 설정 가능
- 지원 Elements : ElementInput, ElementTextArea, ElementDiv, ElementButton, ElementSelect, ElementRadio, ElementCheckbox,ElementUL,ElementLi
- Elements Components 예제 작성

### - 2024-05-22
- v3.1.1 -> v3.1.2 업데이트
- 전체 클래스 명 변경
- 모든 예제 관련 업데이트

### - 2024-05-17
- RecyclerView 코드 최적화

### - 2024-05-16
- RecyclerView TableView Tbody 높이 보다 출력해야할 tr 항목 총 높이가 작을 경우 tbody 높이 설정을 auto 로 자동으로 바꾸도록 업데이트

### - 2024-05-15
- RecyclerView TableView 기능 및 예제 추가
- RecyclerView 데이터 타입과 템플릿 타입 지정 및 return 관련 예제 없데이트
    -- const reponse : { data : any[], view : Template} = {data: Array.isArray(listData) ? listData : [listData], view : listView};

### - 2024-05-14
- @tailwindcss/typography install, tailwind.config.js plugins 설정
- gitignore 설정
- RecyclerView item 높이 강제 지정 기능 추가, clientRectHeight = 59, 단위 픽셀
- RecyclerView 스크롤 포지션 콜백 빈도수 줄이기

### - 2024-05-13
- t1 example manager checkbox all bug 수정

### - 2024-05-12
- RecyclerView 초기 데이터 갯수가 딱 맞게 떨어질 경우 스크롤발생하지 않는 문제 해결
- RecyclerView 데이터 리셋 테스트 및 오타 수정
- RecyclerView class 소스 및 출력 갯수 버그 패치 및 고도화 완성, 스크롤 item 갯수 출력 고도화

### - 2024-05-11
- RecyclerView class 성능 최적화 추가 작업
- RecyclerView class 성능 최적화 추가 패치

### - 2024-05-10
- RecyclerView class 메모리 누수 문제 해결 패치 + 리스트뷰 | 그리드뷰, tableview remove

### - 2024-05-08
- 부분 .mjs -> .js 로 변환

### - 2024-05-07
- release, minify-release 를 한꺼번에 실행하는 release-minify 실행 명령어 추가

### - 2024-05-06
- t1,v1 index.html "script defer src" -> "script src" 로 변경

### - 2024-04-30
- RecyclerView 클래스 호출시 랜더링 데이터 초기화 되도록 업데이트
- SimpleAdapter Data Clear, RecyclerView RenderedData clear 비우기 기능 추가

### - 2024-04-29
- RecyclerView 스크롤 포지션 캡쳐 콜백에  스크롤 위치, 랜더링 카운터 파라메터 콜백 기능 추가
- t1 example update

## [3.1]
### - 2024-04-27
- CountUP plubins 추가 및 example 
- vanillacalendar datepicker, timepicker 관련 응용 예제 업데이트 (time picker 방식으로만 사용할 수 있드록 커스텀 테스트)

### - 2024-04-25
- LazyLoad plugins 추가 및 example (불규칙 레이아웃 출력에 효과 적임)

### - 2024-04-24
- nouislider plugins 추가 및 example 

### - 2024-04-23
- prism-es6 example 추가
- Response type 추가 msg : string | Record<string,any> | any[]

### - 2024-04-22
- prism-es6 소스 코드 뷰어 플러그인 새로 추가
- Observable 클래스 notify 메소드 비동기로 업데이트
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