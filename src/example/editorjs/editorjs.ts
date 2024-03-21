import EditorJS from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Checklist from '@editorjs/checklist'
import Quote from '@editorjs/quote';

const onReady = () : void =>
{
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
                    }
                ]
            }
        }
      ]
    },
    // readOnly: true,
  });

  // 저장 버튼
  document.querySelector<HTMLButtonElement>('#save')!.addEventListener('click',function(e){
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);