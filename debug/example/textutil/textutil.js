import * as TextUtil from 'src/flexvue/core/textutil.class.js';
const onReady = () => {
    const $el = document.querySelector('#echo_contents');
    // phone_format
    let phone_format = TextUtil.phone_format('01011112222');
    Log.d(phone_format);
    $el.insertAdjacentHTML('afterend', `phone_format: ${phone_format}<br>`);
    // number_format
    let number_format = TextUtil.number_format(1000);
    let number_format2 = TextUtil.number_format('1000');
    Log.d('number_format : int ', number_format, 'number_format2 : string', number_format2);
    $el.insertAdjacentHTML('afterend', `number_format : int ${number_format}, number_format2 : string | ${number_format2}<br>`);
    // filesize_format
    let filesize_format = TextUtil.filesize_format(8000);
    Log.d('filesize_format : ', filesize_format);
    $el.insertAdjacentHTML('afterend', `filesize_format : ${filesize_format}<br>`);
    // find_youtube_id
    let find_youtube_id = TextUtil.find_youtube_id('https://www.youtube.com/watch?v=iMYl1IU7Tfo');
    Log.d('find_youtube_id : ', find_youtube_id);
    $el.insertAdjacentHTML('afterend', `find_youtube_id : ${find_youtube_id}<br>`);
    // random_number
    let random_number = TextUtil.random_number(1, 2000);
    Log.d('random_number : ', random_number);
    $el.insertAdjacentHTML('afterend', `random_number : ${random_number}<br>`);
    // change_icons
    let change_icons = TextUtil.change_icons('(가위바위보) (/rock) 주먹 vs 보 (/paper)', { rock: '../images/icons/rock.png', paper: '../images/icons/paper.png' });
    Log.d('change_icons : ', change_icons !== null && change_icons !== void 0 ? change_icons : '-');
    $el.insertAdjacentHTML('afterend', `change_icons : ${change_icons !== null && change_icons !== void 0 ? change_icons : '-'}<br>`);
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
