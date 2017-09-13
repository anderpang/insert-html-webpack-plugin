
class InsertHtmlWebpackPlugin
{
    constructor(options){
        /* options:
          {
              js:[],
              css:[]
          }
          */

          this.options=options||{};
    }

    apply(compiler){

        compiler.plugin("compilation",(compilation)=>{
            compilation.plugin("html-webpack-plugin-before-html-processing",(pluginArgs,callback)=>{
                var assets=pluginArgs.assets,
                    options=this.options;
             
                this._doInsert(assets,options);               

                callback(null,pluginArgs);

            });
        });
    }

    _doInsert(assets,options){
        var list;
        for(var key in options)
        {
           list=options[key];
           Array.isArray(list)?assets[key]=list.concat(assets[key]):assets[key].unshift(list);
        }
    }
}

module.exports=InsertHtmlWebpackPlugin;