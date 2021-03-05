const requireContent = require("require-context");
const chalk = require("chalk");
const path = require("path");
const exec = require("child_process").exec;

const pyPath = path.join(__dirname, "./py");  // 从py文件夹下的.py文件
const exePath = path.join(__dirname, "./exe");  //打包到exe文件夹下 .exe
const testsContent = requireContent(pyPath, false, /\.py$/);  // 匹配py文件夹下的.py文件

const keysList = testsContent.keys();
for (let i = 0; i < keysList.length; i++){
    const item = keysList[i];
    exec(`pyinstaller -F ${pyPath}\\${item} --distpath ${exePath}`, (err, stdout, sterr) => {
        if (err) {
            console.log(chalk.red("×") + ` python打包${item}失败：${err}`);
        } else {
            console.log(chalk.green("√") + ` python打包${item}成功`);
        }
    })
}