#!/bin/bash

# TypeScript 설치
npm install --save-dev -D typescript
npx tsc --init

npm install --save-dev @types/node
npm install --save-dev babel-plugin-module-resolver
npm install --save-dev @babel/cli
npm install concurrently --save-dev

# fs-extra 설치
npm install --save-dev fs-extra

# Tailwind CSS 설치
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install -D @tailwindcss/forms --save-dev
npm install -D @tailwindcss/aspect-ratio --save-dev
npm install -D postcss --save-dev
npm install -D prettier --save-dev
npm install -D prettier-plugin-tailwindcss --save-dev

# ui insatll
npm i -D daisyui@latest --save
# tailwind.config.js
#module.exports = {
#  plugins: [
#    require('daisyui'),
#  ],
#}

# js minify 압축 프로그램
npm install uglify-js --save-dev

# global.d.ts 파일 생성
echo "interface Window {
    observable: Observable;
    Observer : Observer;
    R : R;
    flutter_inappwebview : flutter_inappwebview;
    cacheStorage: CacheLocalStorage;
    cacheMemory: CacheMemory;
}" > global.d.ts

# tsconfig.json 파일 생성
echo '{
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
}' > tsconfig.json

# babel.config.js 파일 생성
echo 'const debugPath = process.env.DEBUG_PATH || './debug';
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
            ,"@flexvue/types":`./${debugPath}/flexvue/core/types.interface.js`
            ,"@flexvue/fastrouter":`./${debugPath}/flexvue/core/fastrouter.class.js`
            ,"@flexvue/recyclerview":`./${debugPath}/flexvue/core/recyclerview.class.js`
            ,"@flexvue/caches":`./${debugPath}/flexvue/core/caches.class.js`
            ,"@editorjs/editorjs": `./${debugPath}/plugins/@editorjs/editorjs/dist/editorjs.js`
            ,"@editorjs/simple-image": `./${debugPath}/plugins/@editorjs/simple-image/dist/simple-image.js`
            ,"@editorjs/header": `./${debugPath}/plugins/@editorjs/header/dist/header.js`
            ,"@editorjs/link": `./${debugPath}/plugins/@editorjs/link/dist/link.js`
            ,"@editorjs/image": `./${debugPath}/plugins/@editorjs/image/dist/image.js`
            ,"@editorjs/table": `./${debugPath}/plugins/@editorjs/table/dist/table.js`
            ,"@editorjs/code": `./${debugPath}/plugins/@editorjs/code/dist/code.js`
            ,"@editorjs/list": `./${debugPath}/plugins/@editorjs/list/dist/list.js`
            ,"@editorjs/embed": `./${debugPath}/plugins/@editorjs/embed/dist/embed.js`
            ,"@editorjs/checklist": `./${debugPath}/plugins/@editorjs/checklist/dist/checklist.js`
            ,"@editorjs/quote": `./${debugPath}/plugins/@editorjs/quote/dist/quote.js`
            ,"swiper/bundle": `./${debugPath}/plugins/swiper/swiper-bundle.min.js`
            ,"vanilla-calendar-pro": `./${debugPath}/plugins/vanilla-calendar-pro/build/vanilla-calendar.min.js`
            ,"filepond": `./${debugPath}/plugins/filepond/dist/filepond.esm.min.js`
            ,"filepond-plugin-image-preview": `./${debugPath}/plugins/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js`
            ,"filepond-plugin-file-validate-size": `./${debugPath}/plugins/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.min.js`
            ,"filepond-plugin-file-validate-type": `./${debugPath}/plugins/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js`
            ,"filepond-plugin-image-validate-size": `./${debugPath}/plugins/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.esm.min.js`
            ,"apexcharts": `./${debugPath}/plugins/apexcharts/dist/apexcharts.esm.js`
            ,"crypto-es": `./${debugPath}/plugins/crypto-es/lib/index.js`
            ,"@cevad-tokatli/date-picker" : `./${debugPath}/plugins/@cevad-tokatli/date-picker/js/date-picker.esm.js`
            ,"notyf" : `./${debugPath}/plugins/notyf/notyf.es.js`
            ,"sweetalert2": `./${debugPath}/plugins/sweetalert2/src/sweetalert2.js`
            ,"@shopify/draggable": `./${debugPath}/plugins/@shopify/draggable`
            ,"prism-es6": `./${debugPath}/plugins/prism-es6/prism.js`
            ,"nouislider": `./${debugPath}/plugins/nouislider/dist/nouislider.js`
            ,"vanilla-lazyload": `./${debugPath}/plugins/vanilla-lazyload/dist/esm/lazyload.js`
            ,"countup.js": `./${debugPath}/plugins/countup.js/dist/countup.js`
          }
        }
      ]
    ]
  }

# .hintrc 파일 생성
echo '{
  "extends": [
    "development"
  ],
  "hints": {
    "axe/text-alternatives": [
      "default",
      {
        "image-alt": "off"
      }
    ],
    "axe/forms": [
      "default",
      {
        "label": "off"
      }
    ]
  }
}' > .hintrc

# tsconfig.paths.json 파일 생성
echo '{
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
          "@flexvue/types": ["src/flexvue/core/types.interface.ts"],
          "@flexvue/fastrouter": ["src/flexvue/core/fastrouter.class.ts"],
          "@flexvue/recyclerview": ["src/flexvue/core/recyclerview.class.ts"],
          "@flexvue/caches": ["src/flexvue/core/caches.class.ts"],
          "@editorjs/editorjs": ["node_modules/@editorjs/editorjs"],
          "@editorjs/simple-image": ["node_modules/@editorjs/simple-image"],
          "@editorjs/header": ["node_modules/@editorjs/header"],
          "@editorjs/link": ["node_modules/@editorjs/link"],
          "@editorjs/image": ["node_modules/@editorjs/image"],
          "@editorjs/table": ["node_modules/@editorjs/table"],
          "@editorjs/code": ["node_modules/@editorjs/code"],
          "@editorjs/list": ["node_modules/@editorjs/list"],
          "@editorjs/embed": ["node_modules/@editorjs/embed"],
          "@editorjs/checklist": ["node_modules/@editorjs/checklist"],
          "@editorjs/quote": ["node_modules/@editorjs/quote"],
          "swiper/bundle": ["node_modules/swiper"],
      }
  }
}' > tsconfig.paths.json

# package.json에 빌드 스크립트 추가
echo '{
  "name": "flexvuets",
  "version": "3.0",
  "description": "",
  "scripts": {
    "debug": "DEBUG_PATH=./debug tsc -p ./tsconfig.json --watch && babel --config-file ./babel.config.js debug -d debug --watch",
    "debug-start": "DEBUG_PATH=./debug concurrently \"tsc -p ./tsconfig.json --watch\" \"babel --config-file ./babel.config.js debug -d debug --watch\"",
    "build": "DEBUG_PATH=./debug tsc -P ./tsconfig.json && babel --config-file ./babel.config.js debug -d debug && npm run export-plugins",
    "export-plugins": "node export-plugins.js",
    "release": "cp -fr ./debug/* ./release && rm -fr ./release/example",
    "release-minify": "node release_minify.js",
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
}' > package.json

# export-plugins.js 파일 생성
echo 'const fs = require('fs-extra');
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
});' > export-plugins.js

# release_minify.js 파일 생성
echo 'const fs = require('fs');
const path = require('path');
const { minify } = require('uglify-js');

// 압축할 상위 디렉토리 경로
const parentDirectory = './release';
const directories = ["t1", "v1"];

// 재귀적으로 디렉토리 탐색하고 JS 파일 압축하기
function minifyJsFiles(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', filePath, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // 하위 디렉토리인 경우 재귀적으로 탐색
                    minifyJsFiles(filePath);
                } else if (path.extname(file) === '.js') {
                    // JavaScript 파일인 경우 압축 후 다시 쓰기
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', filePath, err);
                            return;
                        }

                        const result = minify(data);

                        // 압축된 내용 파일로 쓰기
                        fs.writeFile(filePath, result.code, err => {
                            if (err) {
                                console.error('Error writing file:', filePath, err);
                                return;
                            }
                            console.log('File minified:', filePath);
                        });
                    });
                }
            });
        });
    });
}

// 각 하위 디렉토리에 대해 압축 수행
directories.forEach(subDir => {
    const directoryPath = path.join(parentDirectory, subDir);
    minifyJsFiles(directoryPath);
});' > release_minify.js

# src, debug, release 디렉토리 생성
mkdir -p src debug release

# src/flevvue, v1, t1 디렉토리 생성 혹은 복사
mkdir -p src/flevvue src/v1 src/t1

# debug/plugins 디렉토리 생성
mkdir -p debug/plugins
