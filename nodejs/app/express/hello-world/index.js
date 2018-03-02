// var path = require('path')
// var express = require('express');
// var app = express();
// // 设定port变量，意为访问端口
// app.set('port', process.env.PORT || 3000);

// // 设定views变量，意为视图存放的目录
// app.set('views', path.join(__dirname, 'views'));

// // 设定view engine变量，意为网页模板引擎
// app.set('view engine', 'jade');

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

// // 设定静态文件目录，比如本地文件
// // 目录为demo/public/images，访问
// // 网址则显示为http://localhost:3000/images
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res){
//     var body = 'Hello World';
//     res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Length', body.length);
//     res.end(body);
//   });
//   app.get('/api', function(request, response) {
//     response.send({name:"张三",age:40});
//  });
// app.listen(app.get('port'));

var express = require("express");
var http = require("http");

var app = express();

var express = require("express");
var http = require("http");

var app = express();

app.use("/home", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the homepage!\n");
});

app.use("/about", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the about page!\n");
});

app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});

http.createServer(app).listen(1337);