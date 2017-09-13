var path=require("path");
var webpack=require("webpack");
var config=require("./config.js");
const ROOT=__dirname;

module.exports={
    entry:{
        common:config.inputs
    },
    output:{
        path:path.join(ROOT,"build"),
        filename:"js/[name]_[hash].js",
        library:"[name]_[hash]"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            }
        ]
    },
    plugins:[
         new webpack.DllPlugin({
           path:config.manifest,
           name:"[name]_[hash]",
           context:ROOT   
         })
    ]
};