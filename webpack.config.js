var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');//后来发现是没有配置 引包

module.exports = {

    mode:"development",
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    // devServer:{
    //     // --open --port 3000 --contentBase src --hot
    //     open:true,
    //     port:3000,
    //     contentBase:"src",
    //     hot:true
    // },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({//生成一个对象
            template:path.join(__dirname,"./src/index.html"),//指定需要生成的模板
            filename:"index.html"
        }),
        new VueLoaderPlugin()
            
    ],
    module:{
        rules:[//这里处理所有第三方模块的处理器的规则
            {test:/\.css$/,use:["style-loader","css-loader"]},//注意是从后往前执行的
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            // 处理图片路径 cnpm i url-loader -D 和内部依赖 file-loader,?地址传参一样 limit图片大小
            {test:/\.(png|jpg|jpeg|gif)$/,use:"url-loader?limit=855&name=[hash:8]-[name].[ext]"},
            // {test:/\.(ttf|eot|svg|woff|woff2)$/,use:["style-loader","css-loader","url-loader?limit=50000"]},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader"},//处理字体文件，注意这里的版本b3.3.7才有字体
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"},
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }

}