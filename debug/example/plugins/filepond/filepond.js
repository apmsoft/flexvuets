import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
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
