import CryptoES from 'crypto-es';

const onReady = () : void =>
{
    Log.d("============= AES ================");
    // test data
    const test_json : Record<number,any> = [
        {
            "암호화": "객체",
            "암호화1": "객체",
            "암호화2": "객체",
            "암호화3": "객체",
        },
        {
            "암호화": "객체",
            "암호화1": "객체",
            "암호화2": "객체",
            "암호화3": "객체",
        }
    ];

    const hash_key = "testdd";

    // AES 암호화
    const encrypt_str : string = CryptoES.AES.encrypt(JSON.stringify(test_json), hash_key).toString();
    Log.d('AES encrypt', encrypt_str);

    // AES 복호화
    let decrypt_str : string = CryptoES.AES.decrypt(encrypt_str, hash_key).toString(CryptoES.enc.Utf8);
    Log.d('AES decrypt String', decrypt_str);

    // json parse
    console.log(' JSON Parse', JSON.parse(decrypt_str));

    Log.d("============= MD5 ================");
    const md5_encrypt_str : string = CryptoES.MD5("1234**").toString();
    Log.d('md5_encrypt_str', md5_encrypt_str);

    Log.d("============= SHA256 ================");
    const sha256_encrypt_str : string = CryptoES.SHA256("4567**").toString();
    Log.d('sha256_encrypt_str', sha256_encrypt_str);

    Log.d("============= SHA256 + BASE64 [Encode | Decode ] ================");
    const sha256_wordarray : CryptoES.lib.WordArray = CryptoES.SHA256("4567**");
    Log.d('sah256', sha256_wordarray.toString());
    const base64_encode = sha256_wordarray.toString(CryptoES.enc.Base64);
    Log.d('base64_encode (sha256_encrypt)',base64_encode);
    Log.d('base64_decode', CryptoES.enc.Base64.parse(base64_encode).toString());
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);