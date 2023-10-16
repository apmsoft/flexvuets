interface Window {
    observable: Observable;
    Observer : Observer
    config : Config
}

declare module "*.html" {
    const content: string;
    export default content;
}

// declare var ClassicEditor: any;
// declare module "src/flexvue/plugins/ckeditor5/ckeditor.js" {
//     const ClassicEditor: any;
//     export = ClassicEditor;
// }