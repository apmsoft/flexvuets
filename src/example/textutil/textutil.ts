import * as TextUtil from '@flexvue/textutil';

const onReady = () : void =>
{
    const $el = document.querySelector<HTMLDivElement>('#echo_contents');

    // phone_format
    let phone_format : string = TextUtil.phone_format('01011112222');
    Log.d( phone_format );
    $el!.insertAdjacentHTML('afterend', `phone_format: ${phone_format}<br>`);

    // number_format
    let number_format : string = TextUtil.number_format(1000);
    let number_format2 : string = TextUtil.number_format('1000');
    Log.d( 'number_format : int ',number_format, 'number_format2 : string', number_format2);
    $el!.insertAdjacentHTML('afterend', `number_format : int ${number_format}, number_format2 : string | ${number_format2}<br>`);

    // filesize_format
    let filesize_format : string = TextUtil.filesize_format(8000);
    Log.d( 'filesize_format : ',filesize_format);
    $el!.insertAdjacentHTML('afterend', `filesize_format : ${filesize_format}<br>`);

    // find_youtube_id
    let find_youtube_id : string = TextUtil.find_youtube_id( 'https://www.youtube.com/watch?v=iMYl1IU7Tfo' );
    Log.d( 'find_youtube_id : ',find_youtube_id);
    $el!.insertAdjacentHTML('afterend', `find_youtube_id : ${find_youtube_id}<br>`);

    // random_number
    let random_number : number = TextUtil.random_number( 1,2000 );
    Log.d( 'random_number : ',random_number);
    $el!.insertAdjacentHTML('afterend', `random_number : ${random_number}<br>`);

    // change_icons
    let change_icons : string = TextUtil.change_icons(
        '(가위바위보) (/rock) 주먹 vs 보 (/paper)',
        {rock : '../images/icons/rock.png', paper:'../images/icons/paper.png'}
    );
    Log.d( 'change_icons : ',change_icons ?? '-');
    $el!.insertAdjacentHTML('afterend', `change_icons : ${change_icons ?? '-'}<br>`);
}

//setLanguages = ['en','ja','ko'];
(new App()).setLanguages([]).setResoures({
    sysmsg : new URL(`../js/values/sysmsg${App.getLocale()}.js`, import.meta.url).href,
    arrays : new URL(`../js/values/arrays${App.getLocale()}.js`, import.meta.url).href,
    strings: new URL(`../js/values/strings${App.getLocale()}.js`, import.meta.url).href
}).run(onReady);