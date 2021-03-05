const path = require("path");
const exec = require("child_process").execFile;
const chalk = require("chalk");

export default {
    sendToPython(name,params=null,callback=null,final=null) {
        const url = path.resolve(__dirname, `../../../../static/python/exe/${name}.exe`);
        exec(url, [JSON.stringify(params)], { encoding: "utf8" }, (err, stdout, sterr) => {
            final && final();
            if (err) {
                console.log(chalk.red("×")+`运行python失败${err}`)
                return;
            };
            
            try {
                const result = JSON.parse(stdout);
                if (result.code === 0) {
                    const obj = JSON.parse(JSON.stringify(result));
                    delete obj.code;
                    callback && callback(obj);
                }
            } catch (err) {
                console.log(err);
            }
        })
    }
}