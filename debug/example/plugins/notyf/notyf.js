import { Notyf } from 'notyf';
const onReady = () => {
    // 위치 옵션
    // x	: left | center | right
    // y	: top | center | bottom
    const notyf = new Notyf({
        // duration: 2000,
        position: {
            x: 'right',
            y: 'top',
        },
    });
    notyf.success('Address updated');
    Handler.post(function () {
        notyf.error({
            message: 'Please fill out the form',
            duration: 5000,
            icon: false
        });
    }, 500);
    // notyf.dismissAll();
    notyf.error({
        message: 'Accept the terms before moving forward',
        duration: 5000,
        icon: false
    });
    const notification = notyf.success('Address updated. Click here to continue');
    //@ts-ignore
    notification.on("click", ({ target, event }) => {
        // target: the notification being clicked
        // event: the mouseevent
        alert(1);
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
