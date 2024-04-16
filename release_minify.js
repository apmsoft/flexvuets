const fs = require('fs');
const path = require('path');
const { minify } = require('uglify-js');

// 압축할 상위 디렉토리 경로
const parentDirectory = './release';
const directories = ["t1", "v1"];

// 재귀적으로 디렉토리 탐색하고 JS 파일 압축하기
function minifyJsFiles(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', filePath, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // 하위 디렉토리인 경우 재귀적으로 탐색
                    minifyJsFiles(filePath);
                } else if (path.extname(file) === '.js') {
                    // JavaScript 파일인 경우 압축 후 다시 쓰기
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error('Error reading file:', filePath, err);
                            return;
                        }

                        const result = minify(data);

                        // 압축된 내용 파일로 쓰기
                        fs.writeFile(filePath, result.code, err => {
                            if (err) {
                                console.error('Error writing file:', filePath, err);
                                return;
                            }
                            console.log('File minified:', filePath);
                        });
                    });
                }
            });
        });
    });
}

// 각 하위 디렉토리에 대해 압축 수행
directories.forEach(subDir => {
    const directoryPath = path.join(parentDirectory, subDir);
    minifyJsFiles(directoryPath);
});
