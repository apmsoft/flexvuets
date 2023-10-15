"use strict";
// 01011112222 -> 010-1111-2222, 15881234 -> 1588-1234
const phone_format = (str) => {
    let result = ('' + str).replace(/\D/g, '');
    let match1 = /^(\d{3})(\d{4})(\d{4})$/;
    let match2 = /^(\d{4})(\d{4})$/;
    const m1 = result.match(match1);
    const m2 = result.match(match2);
    if (m1) {
        result = [m1[1], m1[2], m1[3]].join('-');
    }
    else if (m2) {
        result = [m2[1], m2[2]].join('-');
    }
    return result;
};
// 10000 -> 10,000
const number_format = (num, locale = 'ko-KR') => {
    let result = '0';
    let nm = typeof num === 'number' ? String(num) : num;
    let nb = nm.replace(/[^0-9]/g, '');
    if (parseInt(nb) > 0) {
        result = new Intl.NumberFormat(locale).format(parseInt(nm));
    }
    return result;
};
// 8000 -> 8 KB
const filesize_format = (bytes) => {
    if (bytes == 0)
        return '0 Byte';
    let k = 1000;
    let dm = 3;
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
// youtube url 주소에서 id 추출
const find_youtube_id = (url) => {
    let result = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[2].length == 11) {
        result = match[2];
    }
    return result;
};
// 랜덤 숫자
const random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
// 이모티콘 변경용 let nm = "dfds (우리립) (/rock) <small>dsafadsfads</small> (/paper)" -> (/rock) -> img icon
const change_icons = (contents) => {
    if (!contents || contents.length < 1) {
        return contents;
    }
    const s = contents.match(/\(\/\w+\)/gi);
    if (s) {
        s.forEach(em => {
            const em_key = em.replace(/[\W]/gi, "");
            const icon = `<img src="images/icons/${em_key}.png" class="inline-block" />`;
            contents = contents === null || contents === void 0 ? void 0 : contents.replace(em, icon);
        });
    }
    return contents;
};
export { phone_format, number_format, filesize_format, find_youtube_id, random_number, change_icons };
