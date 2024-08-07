var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
import Swal from "../../../plugins/sweetalert2/src/sweetalert2.js";
const onReady = () => {
  // icons 종류
  /**
   * sucess, error, warning, info, question
   */
  // alert
  document.querySelector('#btn-confirm').addEventListener('click', () => {
    //sweet plugins
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: '확인'
    });
  });
  // confirm 선택 예제
  document.querySelector('#btn-confirm-feedback').addEventListener('click', () => {
    // 버튼 css 설정
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      }
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
    }).
    then((result) => {
      // yes
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "파일이 삭제되었습니다.",
          icon: "success"
        });
        // cancel
      } else
      if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "당신의 상상의 파일은 안전합니다 :)",
          icon: "error"
        });
      }
    });
  });
  // 이미지 커스텀
  document.querySelector('#btn-custom-image').addEventListener('click', () => {
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
  document.querySelector('#btn-position').addEventListener('click', () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Toast",
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
  // toast progress style
  document.querySelector('#btn-toast').addEventListener('click', () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'toast 알림이 정상적으로 실행 되었습니다.'
    });
  });
  // prompt
  document.querySelector('#btn-prompt').addEventListener('click', () => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
      const { value: rangeval } = yield Swal.fire({
        title: "Tempo",
        icon: "question",
        input: "range",
        inputLabel: "설정하고자 하는 온도를 선택하세요",
        inputAttributes: {
          min: "-20",
          max: "60",
          step: "1"
        },
        inputValue: 25
      });
      if (rangeval) {
        Swal.fire(`설정온도 : ${rangeval}`);
      }
    }))();
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);