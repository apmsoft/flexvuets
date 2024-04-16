
#### editorjs : https://editorjs.io/getting-started/
# plugins : https://github.com/orgs/editor-js/repositories?type=all
npm i @editorjs/editorjs --save

npm install @editorjs/simple-image --save
npm install @editorjs/header --save
npm install @editorjs/table --save
npm install @editorjs/link --save
npm install @editorjs/image --save
npm install @editorjs/raw --save
npm install @editorjs/checklist --save
npm install @editorjs/list --save
npm install @editorjs/embed --save
npm install @editorjs/quote --save
npm install @editorjs/code --save

>> babal.config.js,"@editorjs/editorjs": `./${debugPath}/plugins/@editorjs/editorjs/dist/editorjs.mjs`
,"@editorjs/simple-image": `./${debugPath}/plugins/@editorjs/simple-image/dist/simple-image.mjs`
,"@editorjs/header": `./${debugPath}/plugins/@editorjs/header/dist/header.mjs`
,"@editorjs/link": `./${debugPath}/plugins/@editorjs/link/dist/link.mjs`
,"@editorjs/image": `./${debugPath}/plugins/@editorjs/image/dist/image.mjs`
,"@editorjs/table": `./${debugPath}/plugins/@editorjs/table/dist/table.mjs`
,"@editorjs/code": `./${debugPath}/plugins/@editorjs/code/dist/code.mjs`
,"@editorjs/list": `./${debugPath}/plugins/@editorjs/list/dist/list.mjs`
,"@editorjs/embed": `./${debugPath}/plugins/@editorjs/embed/dist/embed.mjs`
,"@editorjs/checklist": `./${debugPath}/plugins/@editorjs/checklist/dist/checklist.mjs`
,"@editorjs/quote": `./${debugPath}/plugins/@editorjs/quote/dist/quote.mjs`

>> tsconfig.paths.json
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


#### swiperjs : https://swiperjs.com/get-started
# demos : https://swiperjs.com/demos
npm install swiper --save

>> babel.config.js
,"swiper/bundle": `./${debugPath}/plugins/swiper/swiper-bundle.min.mjs`

>> tsconfig.paths.json
"swiper/bundle": ["node_modules/swiper"],


#### date,time picker : https://github.com/uvarov-frontend/vanilla-calendar-pro
# doc : https://vanilla-calendar.pro/docs/learn/additional-features/enable-time-picker
npm install vanilla-calendar-pro --save

>> babel.config.js
,"vanilla-calendar-pro": `./${debugPath}/plugins/vanilla-calendar-pro/build/vanilla-calendar.min.mjs`

### date,time picker 머트리얼 디자인 : https://www.cssscript.com/flexible-date-time-selection/
npm install @cevad-tokatli/date-picker --save

>> babel.config.js
,"@cevad-tokatli/date-picker" : `./${debugPath}/plugins/@cevad-tokatli/date-picker/js/date-picker.esm.js`


#### filepond : https://pqina.nl/filepond/
npm install filepond --save
npm i filepond-plugin-image-preview --save
npm i filepond-plugin-file-validate-size --save
npm i filepond-plugin-file-validate-type --save
npm i filepond-plugin-image-validate-size --save

>> babel.config.js
,"filepond": `./${debugPath}/plugins/filepond/dist/filepond.esm.min.js`
,"filepond-plugin-image-preview": `./${debugPath}/plugins/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js`
,"filepond-plugin-file-validate-size": `./${debugPath}/plugins/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.min.js`
,"filepond-plugin-file-validate-type": `./${debugPath}/plugins/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js`
,"filepond-plugin-image-validate-size": `./${debugPath}/plugins/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.esm.min.js`


#### apexcharts chart : https://apexcharts.com/docs/creating-first-javascript-chart/
# examples : https://github.com/apexcharts/apexcharts.js/tree/main/samples/vanilla-js
# demo : https://apexcharts.com/javascript-chart-demos/line-charts/data-labels/
npm install apexcharts --save

>> babel.config.js
,"apexcharts": `./${debugPath}/plugins/apexcharts/dist/apexcharts.esm.js`


### crypto-es 암호화 알고리즘 : https://github.com/entronad/crypto-es
npm install crypto-es --save

>> babel.config.js
,"crypto-es": `./${debugPath}/plugins/crypto-es/lib/index.js`