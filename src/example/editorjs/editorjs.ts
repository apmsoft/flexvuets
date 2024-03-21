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
document.addEventListener("DOMContentLoaded",onReady);