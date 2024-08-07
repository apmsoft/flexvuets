ES6+, TypeScript, Tailwind CSS

http://flexvue.fancyupsoft.com



# 설치 방법 1 =================
>> git clone https://github.com/apmsoft/flexvuets.git
>> mv flexvuets 새로운프로젝트명
>> cd 설치경로
>> rm -rf .git
>> chmod +x install.sh
>> ./install.sh

// 불필요한 플러그인들은 주석처리 하세요
>> chmod +x install_plugins.sh
>> ./install_plugins.sh

# 설치 방법 2 =================
>> git clone https://github.com/apmsoft/flexvuets.git
>> mv flexvuets 새로운프로젝트명
>> cd 설치경로
>> rm -rf .git
>> 아래 명령어를 하나씩 치면서 설치

# TypeScript install
npm install --save-dev -D typescript
npx tsc --init

npm install --save-dev @types/node
npm install --save-dev babel-plugin-module-resolver
npm install --save-dev @babel/cli
npm install concurrently --save-dev // 여러 명령을 병렬로 실행할 수 있는 도구
// npm install --save-dev @types/jquery

# fs-extra
npm install --save-dev fs-extra

# tailwind css install
https://tailwindcss.com/docs/installation

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install -D @tailwindcss/forms --save-dev
npm install -D @tailwindcss/aspect-ratio --save-dev
npm install -D postcss --save-dev
npm install -D prettier --save-dev
npm install -D prettier-plugin-tailwindcss --save-dev

>> create file : global.d.ts
interface Window {
  observable: Observable;
  Observer : Observer;
  Arrays : Arrays;
  Sysmsg : Sysmsg;
  Strings : Strings;
  Numbers : Numbers;
}

>> create file : tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "checkJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": false,
    "strictNullChecks": true,
    "noImplicitAny" : false,
    "module": "ESNext",
    "outDir": "debug",
    "rootDir": "src",
    // "types": ["node", "jquery"],
    "types": ["node"],
  },
  "include": [
    "src/**/*",
    "global.d.ts"
  ],
  "exclude": [
    "node_modules","**/*.spec.ts"
  ],
  "extends": "./tsconfig.paths.json",
}

>> babel
>> create file : babel.config.js

const debugPath = process.env.DEBUG_PATH || './debug';
module.exports = {
    "sourceMaps": false,
    "retainLines": true,
    // "presets": ["@babel/preset-typescript"],
    "plugins": [
      [ "module-resolver", {
          "alias": {
            "@path": `./${debugPath}`
            ,"@v1": `./${debugPath}/v1`
            ,"@t1": `./${debugPath}/t1`
            ,"@flexvue/asynctask":`./${debugPath}/flexvue/core/asynctask.class.js`
            ,"@flexvue/forms":`./${debugPath}/flexvue/core/forms.class.js`
            ,"@flexvue/urlmanager":`./${debugPath}/flexvue/core/urlmanager.class.js`
            ,"@flexvue/scrollagent":`./${debugPath}/flexvue/core/scrollagent.class.js`
            ,"@flexvue/textutil":`./${debugPath}/flexvue/core/textutil.class.js`
            // ,"@editorjs/editorjs": `./${debugPath}/plugins/@editorjs/editorjs/dist/editorjs.mjs`
            // ,"@editorjs/simple-image": `./${debugPath}/plugins/@editorjs/simple-image/dist/simple-image.mjs`
            // ,"@editorjs/header": `./${debugPath}/plugins/@editorjs/header/dist/header.mjs`
            // ,"@editorjs/link": `./${debugPath}/plugins/@editorjs/link/dist/link.mjs`
            // ,"@editorjs/image": `./${debugPath}/plugins/@editorjs/image/dist/image.mjs`
            // ,"@editorjs/table": `./${debugPath}/plugins/@editorjs/table/dist/table.mjs`
            // ,"@editorjs/code": `./${debugPath}/plugins/@editorjs/code/dist/code.mjs`
            // ,"@editorjs/list": `./${debugPath}/plugins/@editorjs/list/dist/list.mjs`
            // ,"@editorjs/embed": `./${debugPath}/plugins/@editorjs/embed/dist/embed.mjs`
            // ,"@editorjs/checklist": `./${debugPath}/plugins/@editorjs/checklist/dist/checklist.mjs`
            // ,"@editorjs/quote": `./${debugPath}/plugins/@editorjs/quote/dist/quote.mjs`
            // ,"swiper/bundle": `./${debugPath}/plugins/swiper/swiper-bundle.min.mjs`
            // ,"vanilla-calendar-pro": `./${debugPath}/plugins/vanilla-calendar-pro/build/vanilla-calendar.min.mjs`
            // ,"filepond": `./${debugPath}/plugins/filepond/dist/filepond.esm.min.js`
            // ,"filepond-plugin-image-preview": `./${debugPath}/plugins/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js`
            // ,"filepond-plugin-file-validate-size": `./${debugPath}/plugins/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.min.js`
            // ,"filepond-plugin-file-validate-type": `./${debugPath}/plugins/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js`
            // ,"filepond-plugin-image-validate-size": `./${debugPath}/plugins/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.esm.min.js`
            // ,"apexcharts": `./${debugPath}/plugins/apexcharts/dist/apexcharts.esm.js`
          }
        }
      ]
    ]
  }

>> create file : ".hintrc" 
{
  "extends": [
    "development"
  ],
  "hints": {
    "axe/text-alternatives": [
      "default",
      {
        "image-alt": "off" // 이미지의 대체 텍스트가 없어도 경고를 생성하지 않도록 설정
      }
    ],
    "axe/forms": [
      "default",
      {
        "label": "off" // 폼 요소에 레이블이 없어도 경고를 생성하지 않도록 설정
      }
    ]
  }
}

>> create file : tsconfig.paths.json
{
  "compilerOptions": {
      "types": ["node", "jquery"],
      "baseUrl": "./",
      "paths" : {
          "@path/*": ["src/*"],
          "@v1/*": ["src/v1/*"],
          "@t1/*": ["src/t1/*"],
          "@flexvue/asynctask": ["src/flexvue/core/asynctask.class.ts"],
          "@flexvue/forms": ["src/flexvue/core/forms.class.ts"],
          "@flexvue/urlmanager": ["src/flexvue/core/urlmanager.class.ts"],
          "@flexvue/scrollagent": ["src/flexvue/core/scrollagent.class.ts"],
          "@flexvue/textutil": ["src/flexvue/core/textutil.class.ts"],
          // "@editorjs/editorjs": ["node_modules/@editorjs/editorjs"],
          // "@editorjs/simple-image": ["node_modules/@editorjs/simple-image"],
          // "@editorjs/header": ["node_modules/@editorjs/header"],
          // "@editorjs/link": ["node_modules/@editorjs/link"],
          // "@editorjs/image": ["node_modules/@editorjs/image"],
          // "@editorjs/table": ["node_modules/@editorjs/table"],
          // "@editorjs/code": ["node_modules/@editorjs/code"],
          // "@editorjs/list": ["node_modules/@editorjs/list"],
          // "@editorjs/embed": ["node_modules/@editorjs/embed"],
          // "@editorjs/checklist": ["node_modules/@editorjs/checklist"],
          // "@editorjs/quote": ["node_modules/@editorjs/quote"],
          // "swiper/bundle": ["node_modules/swiper"],
      }
  }
}


# nodejs build setting
>> package.json
{
  "name": "flexvuets",
  "version": "3.0",
  "description": "",
  "scripts": {
    "debug": "DEBUG_PATH=./debug tsc -p ./tsconfig.json --watch && babel --config-file ./babel.config.js debug -d debug --watch",
    "debug-start": "DEBUG_PATH=./debug concurrently \"tsc -p ./tsconfig.json --watch\" \"babel --config-file ./babel.config.js debug -d debug --watch\"",
    "build": "DEBUG_PATH=./debug tsc -P ./tsconfig.json && babel --config-file ./babel.config.js debug -d debug && npm run export-plugins",
    "export-plugins": "node export-plugins.js",
    "release": "cp -fr ./debug/* ./release",
    "clean": "tsc --build --clean",
    "clean-release": "rm -fr ./release/*",
    "css-v1": "npx tailwindcss -i ./tailwind.css -o ./debug/v1/css/tailwind.css --watch --minify",
    "css-t1": "npx tailwindcss -i ./tailwind.css -o ./debug/t1/css/tailwind.css --watch --minify"
  },
  "author": "http://flexvue.fancyupsoft.com",
  "license": "MIT",
  "dependencies": {

  },
  "devDependencies": {

  }
}

>> create file : export-plugins.js (package.json 의 dependencies 로 설치된 프로그램만 자동 복사)
const fs = require('fs-extra');
const path = require('path');

// package.json 파일의 경로
const packageJsonPath = path.join(__dirname, 'package.json');

// package.json 파일 읽기
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  // package.json 파싱
  const packageJson = JSON.parse(data);

  // dependencies에서 패키지 목록 추출export
  const dependencies = packageJson.dependencies || {};

  // 복사할 디렉토리
  const destinationDir = path.join(__dirname, 'debug', 'plugins');

  // 각 패키지의 파일 복사
  Object.keys(dependencies).forEach(dependency => {
    const packagePath = path.join(__dirname, 'node_modules', dependency);
    fs.copy(packagePath, path.join(destinationDir, dependency), err => {
      if (err) {
        console.error(`Error copying files for ${dependency}:`, err);
      } else {
        console.log(`Files copied successfully for ${dependency}.`);
      }
    });
  });
});

>> create directory : src, debug, release

>> create or copy directory : src/flevvue, v1, t1
>> create directory : debug/plugins

# 실행 명령어
>> npm run debug
>> npm run build
>> npm run clean
>> npm run css-v1 // tailwindcss
>> npm run css-t1 // tailwindcss

>> npm run release // release 폴더로 debug 작업물 복사
>> npm run clean_release // release 폴더 및 파일 전체 삭제