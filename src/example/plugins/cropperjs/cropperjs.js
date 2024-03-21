"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cropper_esm_min_js_1 = require("@flexvue/plugins/cropper/cropper.esm.min.js");
var onReady = function () {
    var image = document.querySelector('#image');
    //     const cropper = new Cropper(image, {
    //         dragMode: 'move',
    //         aspectRatio: 1 / 1,
    //         autoCropArea: ["40px","40px"],
    //         // autoCropArea: 1,
    //         restore: true,
    //         guides: false,
    //         center: false,
    //         highlight: false,
    //         cropBoxMovable: false,
    //         cropBoxResizable: true,
    //         toggleDragModeOnDblclick: false,
    //         viewMode: 1,
    //         zoom : false,
    //         ready: function () {
    //             // cropbox reset
    //             // cropper.setCropBoxData({left: ((500-400)/2), top: ((700-400)/2), width:400, height:400});
    //             cropper.setCropBoxData({top: ((700-500)/2)});
    //         },
    //     });
    var minAspectRatio = 0.5;
    var maxAspectRatio = 1.5;
    var cropper = new cropper_esm_min_js_1.default(image, {
        aspectRatio: 1 / 1,
        autoCropArea: 1,
        dragMode: 'move',
        highlight: false,
        viewMode: 1,
        restore: true,
        cropBoxMovable: true,
        cropBoxResizable: true,
        zoomable: false,
        zoomOnWheel: false,
        ready: function () {
            var cropper = this.cropper;
            var containerData = cropper.getContainerData();
            var cropBoxData = cropper.getCropBoxData();
            var aspectRatio = cropBoxData.width / cropBoxData.height;
            var newCropBoxWidth;
            // if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
            // newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);
            cropper.setCropBoxData({
                left: (containerData.width - newCropBoxWidth) / 2,
                top: 40,
                width: newCropBoxWidth
            });
            // }
        },
        cropmove: function () {
            var cropper = this.cropper;
            var cropBoxData = cropper.getCropBoxData();
            var aspectRatio = cropBoxData.width / cropBoxData.height;
            if (aspectRatio < minAspectRatio) {
                cropper.setCropBoxData({
                    width: cropBoxData.height * minAspectRatio
                });
            }
            else if (aspectRatio > maxAspectRatio) {
                cropper.setCropBoxData({
                    width: cropBoxData.height * maxAspectRatio
                });
            }
        },
    });
    var button = document.getElementById('button');
    var result = document.getElementById('result');
    button.onclick = function () {
        result.innerHTML = '';
        // result.appendChild(cropper.getCroppedCanvas());
        var imgUrl = cropper.getCroppedCanvas({ width: 1000, height: 1000 }).toDataURL();
        var img = document.createElement("img");
        img.src = imgUrl;
        result.appendChild(img);
    };
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);
