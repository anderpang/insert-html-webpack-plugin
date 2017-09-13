var path=require("path");
const ROOT=__dirname;

var config={
    inputs:["./src/common-1.js","./src/common-2.js"],  //公用js文件
    manifest:path.join(ROOT,"commons-mainfest.json")           //生成清单的文件
};

module.exports=config;