import EditorJS from "../../../../node_modules/@editorjs/editorjs/dist/editorjs.mjs";
import SimpleImage from "../../../../node_modules/@editorjs/simple-image/dist/simple-image.mjs";
import Header from "../../../../node_modules/@editorjs/header/dist/header.mjs";
import List from "../../../../node_modules/@editorjs/list/dist/list.mjs";
import CodeTool from "../../../../node_modules/@editorjs/code/dist/code.mjs";
import LinkTool from "../../../../node_modules/@editorjs/link/dist/link.mjs";
import Embed from "../../../../node_modules/@editorjs/embed/dist/embed.mjs";
import Table from "../../../../node_modules/@editorjs/table/dist/table.mjs";
import Checklist from "../../../../node_modules/@editorjs/checklist/dist/checklist.mjs";
import Quote from "../../../../node_modules/@editorjs/quote/dist/quote.mjs";
const onReady = () => {
  const editor = new EditorJS({
    autofocus: true,
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
    holder: 'editorjs',
    data: {
      "blocks": [
      {
        "id": "lDdJIXwOeR",
        "type": "paragraph",
        "data": {
          "text": "This is a paragraph."
        }
      },
      {
        "id": "R6YuLZSnov",
        "type": "header",
        "data": {
          "text": "This is a header",
          "level": 6
        }
      },
      {
        "id": "f8RhXRxZiA",
        "type": "checklist",
        "data": {
          "items": [
          {
            "text": "1",
            "checked": false
          },
          {
            "text": "2",
            "checked": false
          },
          {
            "text": "3",
            "checked": false
          }]

        }
      },
      {
        "id": "CgFKu5h1ej",
        "type": "list",
        "data": {
          "style": "ordered",
          "items": [
          "ㄴㄹㅁㄹㅁㄹㅁ",
          "dasfaf asfsa fa",
          "ryterk lsalfas asfasjf;as"]

        }
      },
      {
        "id": "ljI82GoVQX",
        "type": "table",
        "data": {
          "withHeadings": false,
          "content": [
          [
          "d",
          "dfa"],

          [
          "asf",
          "asfa"]]


        }
      },
      {
        "id": "idM4mk420C",
        "type": "embed",
        "data": {
          "service": "youtube",
          "source": "https://www.youtube.com/watch?v=cp4aUznNvJ0",
          "embed": "https://www.youtube.com/embed/cp4aUznNvJ0",
          "width": 580,
          "height": 320,
          "caption": ""
        }
      }]

    }
    // readOnly: true,
  });
  // 저장 버튼
  document.querySelector('#save').addEventListener('click', function (e) {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData);
    }).catch((error) => {
      console.log('Saving failed: ', error);
    });
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);