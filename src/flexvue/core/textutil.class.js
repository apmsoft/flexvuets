"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change_icons = exports.random_number = exports.find_youtube_id = exports.filesize_format = exports.number_format = exports.phone_format = void 0;
// 01011112222 -> 010-1111-2222, 15881234 -> 1588-1234
var phone_format = function (str) {
    var result = ('' + str).replace(/\D/g, '');
    var match1 = /^(\d{3})(\d{4})(\d{4})$/;
    var match2 = /^(\d{4})(\d{4})$/;
    var m1 = result.match(match1);
    var m2 = result.match(match2);
    if (m1) {
        result = [m1[1], m1[2], m1[3]].join('-');
    }
    else if (m2) {
        result = [m2[1], m2[2]].join('-');
    }
    return result;
};
exports.phone_format = phone_format;
// 10000 -> 10,000
var number_format = function (num, locale) {
    if (locale === void 0) { locale = 'ko-KR'; }
    var result = '0';
    var nm = typeof num === 'number' ? String(num) : num;
    var nb = nm.replace(/[^0-9]/g, '');
    if (parseInt(nb) > 0) {
        result = new Intl.NumberFormat(locale).format(parseInt(nm));
    }
    return result;
};
exports.number_format = number_format;
// 8000 -> 8 KB
var filesize_format = function (bytes) {
    if (bytes == 0)
        return '0 Byte';
    var k = 1000;
    var dm = 3;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
exports.filesize_format = filesize_format;
// youtube url 주소에서 id 추출
var find_youtube_id = function (url) {
    var result = '';
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        result = match[2];
    }
    return result;
};
exports.find_youtube_id = find_youtube_id;
// 랜덤 숫자
var random_number = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.random_number = random_number;
// 이모티콘 변경용 let nm = "dfds (우리립) (/rock) <small>dsafadsfads</small> (/paper)" -> (/rock) -> img icon
var change_icons = function (contents, _icons) {
    if (!contents || contents.length < 1) {
        return contents;
    }
    var s = contents.match(/\(\/\w+\)/gi);
    if (s) {
        s.forEach(function (em) {
            var em_key = em.replace(/[\W]/gi, "");
            var icon = _icons[em_key] ? "<img src=\"".concat(_icons[em_key], "\" class=\"inline-block\" />") : '';
            contents = contents === null || contents === void 0 ? void 0 : contents.replace(em, icon);
        });
    }
    return contents;
};
exports.change_icons = change_icons;
