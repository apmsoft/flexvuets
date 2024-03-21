import EditorJS from "../../../node_modules/@editorjs/editorjs/dist/editorjs.mjs";
import SimpleImage from "../../../node_modules/@editorjs/simple-image/dist/simple-image.mjs";
import Header from "../../../node_modules/@editorjs/header/dist/header.mjs";
import List from "../../../node_modules/@editorjs/list/dist/list.mjs";
import CodeTool from "../../../node_modules/@editorjs/code/dist/code.mjs";
import LinkTool from "../../../node_modules/@editorjs/link/dist/link.mjs";
import Embed from "../../../node_modules/@editorjs/embed/dist/embed.mjs";
import Table from "../../../node_modules/@editorjs/table/dist/table.mjs";
import Checklist from "../../../node_modules/@editorjs/checklist/dist/checklist.mjs";
import Quote from "../../../node_modules/@editorjs/quote/dist/quote.mjs";
const onReady = () => {
  const editor = new EditorJS({
    // autofocus: true,
    placeholder: '여기에 내용을 입력하세요!',
    tools: {
      header: Header,
      image: SimpleImage,
      list: List,
      checklist: Checklist,
      quote: Quote,
      code: CodeTool,
      linkTool: LinkTool,
      embed: Embed,
      table: Table
    },
    holder: 'editorjs'
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
//# sourceMappingURL=editorjs.js.map