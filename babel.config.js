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
            ,"@flexvue/asynctask":`./${debugPath}/flexvue/core/AsyncTask.class.js`
            ,"@flexvue/forms":`./${debugPath}/flexvue/core/Forms.class.js`
            ,"@flexvue/urlmanager":`./${debugPath}/flexvue/core/UrlManager.class.js`
            ,"@flexvue/scrollagent":`./${debugPath}/flexvue/core/ScrollAgent.class.js`
            ,"@flexvue/textutil":`./${debugPath}/flexvue/core/TextUtil.class.js`
            ,"@flexvue/types":`./${debugPath}/flexvue/core/Types.interface.js`
            ,"@flexvue/fastrouter":`./${debugPath}/flexvue/core/FastRouter.class.js`
            ,"@flexvue/recyclerview":`./${debugPath}/flexvue/core/RecyclerView.class.js`
            ,"@flexvue/caches":`./${debugPath}/flexvue/core/Caches.class.js`
            ,"@flexvue/elements/types":`./${debugPath}/flexvue/components/ElementsTypes.interface.js`
            ,"@flexvue/elements/manager":`./${debugPath}/flexvue/components/ElementsManager.class.js`
            ,"@flexvue/elements/attrs":`./${debugPath}/flexvue/components/ElementsAttributeOptions.class.js`
            ,"@flexvue/elements/create":`./${debugPath}/flexvue/components/ElementsCreate.class.js`
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
    ],
    compact: false
  }