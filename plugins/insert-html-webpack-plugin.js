
class InsertHtmlWebpackPlugin
{
    constructor(options){
        /* options:
          {
              js:[],
              css:[]
          }
          */

          this.options=options;
    }

    apply(compiler){

        compiler.plugin("compilation",(compilation)=>{
            compilation.plugin("html-webpack-plugin-before-html-processing",(pluginArgs,callback)=>{
                var assets=pluginArgs.assets,
                    js=this.options.js,
                    css=this.options.css;
             
                if(typeof js!=="undefined")
                {
                      Array.isArray(js)?assets.js=js.concat(assets.js):assets.js.unshift(js);
                }
                
                if(typeof css!=="undefined")
                {
                      Array.isArray(css)?assets.css=css.concat(assets.css):assets.css.unshift(css);
                }

                callback(null,pluginArgs);

            });
        });
    }
}

module.exports=InsertHtmlWebpackPlugin;