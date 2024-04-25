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

    const secret_key = "testdd";
    const secret_iv  = 'ivddd';
    const hash_key   = CryptoES.SHA256(secret_key).toString();
    const iv = CryptoES.SHA256(secret_iv).toString(CryptoES.enc.Hex).substring(0, 16);
    Log.d('iv', iv);

    // AES 암호화
    const encrypt_str : string = CryptoES.AES.encrypt(JSON.stringify(test_json), hash_key, { iv: CryptoES.enc.Hex.parse(iv), mode: CryptoES.mode.CBC }).toString();
    Log.d('AES encrypt', encrypt_str);

    // IV와 암호화된 문자열을 합친 후 Base64로 인코딩
    const combined_str = iv + "." + encrypt_str;
    const base64_encoded = CryptoES.enc.Base64.stringify(CryptoES.enc.Utf8.parse(combined_str));
    Log.d('Base64 encode :', base64_encoded);

    // AES 복호화
    // Base64 디코딩
    const decoded_str = CryptoES.enc.Utf8.stringify(CryptoES.enc.Base64.parse(base64_encoded));
    Log.d('Base64 decode :', base64_encoded);

    // IV와 암호화된 문자열을 분리
    const parts = decoded_str.split('.');
    Log.d(parts);
    const decoded_iv = parts[0];
    const decoded_encrypted_str = parts[1];

    // AES 복호화
    const decrypted_str = CryptoES.AES.decrypt(decoded_encrypted_str, hash_key, { iv: CryptoES.enc.Hex.parse(decoded_iv), mode: CryptoES.mode.CBC }).toString(CryptoES.enc.Utf8);
    Log.d('AES decrypt:', decrypted_str);

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