
var autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const   CleanWebpackPlugin = require("clean-webpack-plugin")
let path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname , '../app/main.js') ,
        vender: 'moment' 
    },
    output: {
        path: path.resolve(__dirname , '../public'),
        filename: '[name].[hash:8].js?[hash:8]',
        publicPath: '/' //资源路径,如:css的背景图片等路径
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, //允许使用ES6以及JSX的语法
                use: {
                    loader: "babel-loader"
                    // options: {
                    //     presets: [
                    //         "env", "react" ,"stage-0"
                    //         //env根据配置环境计算bebel对代码填充何种等级的polyfill(垫片),已包括es2015的配置
                    //         //使用babel编译react
                    //         //stage-0,1,2,3与ES7相关的配置
                    //     ]
                    // }
                },
                exclude: /node_modules/ //禁止编译node文件
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                              return [
                                require('autoprefixer')
                              ];
                            }
                          }
                        // options: {
                        //     sourceMap: true,
                        //     config: {
                        //       path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                        //     }
                        //   }
                    }
                ]
            }
        ],
        
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,  //实时刷新\
        hot: true,
        host: '192.168.1.39',
        port: 8081
    },
    plugins: [
        new webpack.BannerPlugin("版本所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , "../app/index.html")//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件 
        new webpack.optimize.OccurrenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.UglifyJsPlugin(), //压缩JS代码
        new ExtractTextPlugin("style.css"), //分离CSS和JS文件
        new CleanWebpackPlugin(['./public/*'] , { //去除build文件中的残余文件
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
         })
    ]
    
}

console.log(__dirname)