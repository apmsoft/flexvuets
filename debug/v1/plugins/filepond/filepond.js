import * as FilePond from "../../../plugins/filepond/dist/filepond.esm.min.js";
import FilePondPluginImagePreview from "../../../plugins/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.min.js";
import FilePondPluginImageValidateSize from "../../../plugins/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.esm.min.js";
import FilePondPluginFileValidateSize from "../../../plugins/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.esm.min.js";
import FilePondPluginFileValidateType from "../../../plugins/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.min.js";
const onReady = () => {
  // filepond
  FilePond.registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageValidateSize);
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement, {
    maxFiles: 1,
    allowBrowse: true,
    allowMultiple: false,
    allowImagePreview: true,
    server: {
      url: 'http://localhost:8001/flexphp/test',
      process: {
        url: '/file_upload.php',
        method: 'POST',
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "*"
        },
        timeout: 7000,
        onload: (response) => {
          console.log('onload');
          console.log(response);
          return response.key;
        },
        onerror: (response) => {
          console.log('onerror');
          console.log(response);
          return response.data;
        },
        ondata: (formData) => {
          formData.append('extract_id', 'ddd');
          return formData;
        }
      },
      revert: null,
      load: null,
      fetch: null,
      restore: null
    }
  });
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);