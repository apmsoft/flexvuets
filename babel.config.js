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
            ,"@editorjs/editorjs": `./${debugPath}/plugins/@editorjs/editorjs/dist/editorjs.mjs`
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
            ,"swiper/bundle": `./${debugPath}/plugins/swiper/swiper-bundle.min.mjs`
            ,"vanilla-calendar-pro": `./${debugPath}/plugins/vanilla-calendar-pro/build/vanilla-calendar.min.mjs`
            ,"filepond": `./${debugPath}/plugins/filepond/dist/filepond.esm.min.js`
            ,"filepond-plugin-image-preview": `./${debugPath}/plugins/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js`
            ,"filepond-plugin-file-validate-size": `./${debugPath}/plugins/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.min.js`
            ,"filepond-plugin-file-validate-type": `./${debugPath}/plugins/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js`
            ,"filepond-plugin-image-validate-size": `./${debugPath}/plugins/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.esm.min.js`
            ,"apexcharts": `./${debugPath}/plugins/apexcharts/dist/apexcharts.esm.js`
          }
        }
      ]
    ]
  }