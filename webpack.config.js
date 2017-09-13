var path=require("path");
var webpack=require("webpack");
var config=require("./config");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var InsertHtmlWebpackPlugin=require("./plugins/insert-html-webpack-plugin");

var manifest=require(config.manifest);

var commonjs="js/"+manifest.name+".js";

const ROOT=__dirname;

module.exports={
    entry:{
        entry:"./src/entry.js"
    },
    output:{
        path:path.join(ROOT,"build"),
        filename:"js/[hash]/[name].js"
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
       new webpack.DllReferencePlugin({
            context:ROOT,                                   
            manifest:manifest   
       }),
       new HtmlWebpackPlugin({
           template:path.join(ROOT,"public","index.html"),
           //commonjs:commonjs
       }),
       new InsertHtmlWebpackPlugin({
               js:[commonjs]
       })
    ]
};