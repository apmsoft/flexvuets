var onReady = function () {
    document.querySelectorAll('.uk-hidden').forEach(function (el, idx) {
        console.log(idx);
        var closestTrObj = el.closest("tr");
        console.log(closestTrObj);
        if (closestTrObj) {
            var elPrice = closestTrObj.querySelector('.price');
            console.log(elPrice.textContent);
        }
    });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
