/*
  复制dist文件夹js和css文件到static目录下
*/

const fs = require('fs');
const path = require('path');
// 默认打包存放地址
const srcDir = path.join(__dirname, '../dist');
// 打包后文件存放地址
const destDir = path.join(__dirname, '../../');

const mkdir = dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

const copyList = ['js/app.js', 'js/app.js.map', 'js/manifest.js', 'js/manifest.js.map', 'js/vendor.js', 'js/vendor.js.map', 'css/app.css', 'css/app.css.map'];

copyList.forEach(_fileName => {
    const srcFileName = path.join(srcDir, _fileName);
    const destFileName = path.join(destDir, _fileName);

    if (!fs.existsSync(srcFileName)) {
        return;
    }

    mkdir(path.dirname(destFileName));

    const readStream = fs.createReadStream(srcFileName);
    const writeStream = fs.createWriteStream(destFileName);
    readStream.pipe(writeStream);
});
