module.exports = {
    entry: __dirname + '/app/main.js' ,
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,  //实时刷新\
        host: '192.168.1.39',
        port: 8082
    }
}