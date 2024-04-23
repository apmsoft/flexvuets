import {Template} from '@flexvue/types';

class SourceView implements Template
{
    constructor(){
    }

    render(message : Record<string,any> = {}) {

        return (String.raw`
    <div class="item border" data-id="1">
        <span>1</span>: <span class="item-text"> 비동기 템플릿 prism test</span>
    </div>

    <section class="mb-10 lazy" data-lazy-function="fadeinup" >
        <h5 class="text-gray-500 mb-1">선언과 함께 데이터 가져오기</h5>
        <pre class="bg-gray-900 text-gray-100 rounded-lg px-0 text-sm">
        <code class="language-javascript">
    // run AsyncTask
    new AsyncTask().doImport('GET', new URL(\`../js/values/strings.js\`, import.meta.url).href )
    .then( resp =>{
        Log.d('----->',resp);
    });
        </code>
        </pre>
    </section>
    `
    )}
}
export {SourceView};