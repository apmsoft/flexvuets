const fs = require('fs-extra');
const path = require('path');

// package.json 파일의 경로
const packageJsonPath = path.join(__dirname, 'package.json');

// package.json 파일 읽기
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  // package.json 파싱
  const packageJson = JSON.parse(data);

  // dependencies에서 패키지 목록 추출export
  const dependencies = packageJson.dependencies || {};

  // 복사할 디렉토리
  const destinationDir = path.join(__dirname, 'debug', 'plugins');

  // 각 패키지의 파일 복사
  Object.keys(dependencies).forEach(dependency => {
    const packagePath = path.join(__dirname, 'node_modules', dependency);
    fs.copy(packagePath, path.join(destinationDir, dependency), err => {
      if (err) {
        console.error(`Error copying files for ${dependency}:`, err);
      } else {
        console.log(`Files copied successfully for ${dependency}.`);
      }
    });
  });
});
