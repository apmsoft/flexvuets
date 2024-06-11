const onReady = () => {
    var _a, _b;
    new ProgressBars();
    (_a = document.querySelector('#btn_show')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        ProgressBars.show();
    });
    (_b = document.querySelector('#btn_close')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        ProgressBars.close();
    });
};
//setLanguages = ['en','ja','ko'];
(new App()).setLanguages([]).setResoures(import.meta.url).run(onReady);
export {};
