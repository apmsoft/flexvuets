// class
class DrawerMenu {
    constructor() {
        this.pre_navname = "";
    }
    init() {
        const drawerMenuEle = document.querySelector("#btn-drawer-menu");
        if (drawerMenuEle) {
            drawerMenuEle.addEventListener("click", function () {
                window.location.hash = '#/drawermenu';
            });
        }
    }
    // 메뉴 펼침
    openDrawer() {
        const layDrawerMenu = document.querySelector("#drawer_menu");
        if (!layDrawerMenu.classList.contains("drawer_transitioned")) {
            layDrawerMenu.classList.add("drawer_transitioned");
        }
    }
    // 메뉴 닫기
    closeDrawer() {
        const layDrawerMenu = document.querySelector("#drawer_menu");
        const closeDW = document.querySelector("#btn-close-dw");
        if (closeDW) {
            closeDW.addEventListener("click", function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                history.go(-1);
            });
        }
        if (layDrawerMenu) {
            layDrawerMenu.addEventListener("click", function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                history.go(-1);
            });
        }
    }
    // 메뉴 이벤트
    doDrawerListener() {
        document.querySelectorAll(".drawer-item").forEach((el) => {
            el.addEventListener("click", function () {
                const layDrawerMenu = document.querySelector("#drawer_menu");
                if (layDrawerMenu.classList.contains("drawer_transitioned")) {
                    layDrawerMenu.classList.remove("drawer_transitioned");
                }
                // go
                Handler.post(function () {
                    const dwId = el.dataset.dwdid;
                    if (dwId !== undefined) {
                        window.location.hash = dwId;
                    }
                }, 350);
            });
        });
    }
    update(message) {
        Log.d("update ..>>>>" + JSON.stringify(message));
        let navname = `${message}`;
        Log.d("pre_navname >> " + this.pre_navname);
        Log.d("navname : >> " + navname);
        // pre 이전 선택 메뉴 de active
        let pre_dw_item = null;
        if (this.pre_navname != "") {
            document.querySelectorAll(`[data-navname="${this.pre_navname}"]`).forEach(el => {
                el.classList.remove("drawer-item-active");
            });
        }
        // cur 현재 메뉴 활성 active
        document.querySelectorAll(`[data-navname="${navname}"]`).forEach(el => {
            el.classList.add("drawer-item-active");
        });
        this.pre_navname = navname;
    }
}
export { DrawerMenu };
