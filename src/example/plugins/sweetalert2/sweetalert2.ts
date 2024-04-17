import Swal from 'sweetalert2'

const onReady = () : void =>
{
    // alert
    document.querySelector<HTMLButtonElement>('#btn-confirm')!.addEventListener('click',()=>
    {
        //sweet plugins
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: '확인'
        })
    });

    // confirm 선택 예제
    document.querySelector<HTMLButtonElement>('#btn-confirm-feedback')!.addEventListener('click',()=>
    {
        // 버튼 css 설정
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            // buttonsStyling: false
        });

        // confirm alert
        swalWithBootstrapButtons.fire({
            title: "Confirm",
            text: "삭제 하시겠습니까?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: true
        })
        .then((result) => {
            // yes
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "파일이 삭제되었습니다.",
                    icon: "success"
                });
            // cancel
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "당신의 상상의 파일은 안전합니다 :)",
                    icon: "error"
                });
            }
        });
    });

    // 이미지 커스텀
    document.querySelector<HTMLButtonElement>('#btn-custom-image')!.addEventListener('click',()=>
    {
        Swal.fire({
            title: "커스텀 alert",
            text: "당신의 상상의 파일은 안전합니다 :)",
            width: 600,
            padding: "3em",
            color: "#151519",
            // background: "#fff url(/images/trees.png)",
            backdrop: `
                rgba(0,0,0,0.7)
                url("../../images/alert/nyan-cat.gif")
                left top
                no-repeat
            `
        });
    });

    // alert 위치와 시간 설정 가능
    document.querySelector<HTMLButtonElement>('#btn-position')!.addEventListener('click',()=>
    {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title : "Toast",
            text: "귀하의 작업이 저장되었습니다(1.5초 뒤에 자동 닫힘)",
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutUp
                `
            }
        });
    });
};

// document ready
document.addEventListener("DOMContentLoaded",onReady);
