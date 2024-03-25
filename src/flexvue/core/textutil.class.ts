"use strict";

// 01011112222 -> 010-1111-2222, 15881234 -> 1588-1234
const phone_format = (str: string | number): string => {
    let result: string = ('' + str).replace(/\D/g, '');
    let match1: RegExp = /^(\d{3})(\d{4})(\d{4})$/;
    let match2: RegExp = /^(\d{4})(\d{4})$/;

    const m1 = result.match(match1);
    const m2 = result.match(match2);

    if (m1) {
        result = [m1[1],m1[2],m1[3]].join('-');
    } else if (m2) {
        result = [m2[1],m2[2]].join('-');
    }
    return result;
}

// 10000 -> 10,000
const number_format = (num: string | number, locale: string = 'ko-KR'): string => {
    let result: string = '0';
    let nm : string = typeof num === 'number' ? String(num) : num;
    let nb: string = nm.replace(/[^0-9]/g, '');

    if (parseInt(nb) > 0) {
        result = new Intl.NumberFormat(locale).format(parseInt(nm));
    }
    return result;
}

// 8000 -> 8 KB
const filesize_format = (bytes : number) : string => {
    if (bytes == 0) return '0 Byte';
    let k : number = 1000;
    let dm : number = 3;
    let sizes : string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i : number = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// youtube url 주소에서 id 추출
const find_youtube_id = (url : string) : string => {
    let result : string = '';
    const regExp : RegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match : RegExpMatchArray | null = url.match(regExp);

    if (match && match[2].length == 11) {
        result = match[2];
    }
return result;
}

// 랜덤 숫자
const random_number = (min:number,max:number) : number =>{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// 날짜 object
const parseDate = (curdate: Date): Record<string, number | string> => {
    const year: number = curdate.getFullYear();
    let month: number | string = curdate.getMonth() + 1;
    let day: number | string = curdate.getDate();
    let hour: number | string = curdate.getHours();
    let minute: number | string = curdate.getMinutes();
    let second: number | string = curdate.getSeconds();

    // 10미만인 분과 초를 2자리로 변경
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    day = day < 10 ? '0' + day : day;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    const result: Record<string, number | string> = {
        "Y": year,
        "m": month,
        "d": day,
        "H": hour,
        "i": minute,
        "s": second
    };

    return result;
}


// 이모티콘 변경용 let nm = "dfds (우리립) (/rock) <small>dsafadsfads</small> (/paper)" -> (/rock) -> img icon
const change_icons = (contents: string, _icons : {[prepName:string] : any}): string => {
    if (!contents || contents.length < 1) {
        return contents;
    }

    const s: RegExpMatchArray | null = contents.match(/\(\/\w+\)/gi);
    if (s) {
        s.forEach(em => {
            const em_key: string = em.replace(/[\W]/gi, "");
            const icon: string = _icons[em_key]? `<img src="${_icons[em_key]}" class="inline-block" />` : '';
            contents = contents?.replace(em, icon);
        });
    }
    return contents;
}

export {phone_format, number_format, filesize_format, find_youtube_id, random_number, change_icons, parseDate};