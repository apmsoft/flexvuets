import Prism from 'prism-es6';
import AsyncTask from '@flexvue/asynctask';
import {Template} from '@flexvue/types';

const onReady = () : void =>
{
    // 프리즘 기능을 수동으로 사용하려는 경우 다음을 설정해야 합니다.
    Prism.manual = true;
    Prism.highlightAll();

    // 비동기 html prismjs test
    new AsyncTask().doImport(new URL(`../prismjs/tpl/source.js`, import.meta.url).href )
    .then( data =>{
        const template : Template = new data.SourceView();

        // output html
        document.querySelector<HTMLDivElement>('#contents')!.innerHTML = template.render({});
    })
    .then(()=>
    {
        // code 만 찾기
        document.querySelectorAll<HTMLElement>('#contents code').forEach((el)=>
        {
            let code_css = el.getAttribute('class');
            if(code_css !== null)
            {
                let code_lang = code_css.split('-')[1];

                let _ess = el.innerText;
                _ess = String(_ess).replace(/&amp;gt;/g, '>');
                _ess = String(_ess).replace(/\\/g, '');
                const html = Prism.highlight(_ess, Prism.languages[code_lang], code_lang);
                el.innerHTML = `${html}`;
            }
        });
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
