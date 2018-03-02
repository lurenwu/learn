var express = require('express');
var app = express();

// 加载hbs模块
var hbs = require('hbs');

// 加载数据模块
var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
// app.use(express.bodyParser());
app.get('/', function (req, res) {
    res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
    // res.render('index');  
    // res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
    res.render('about', {title:"自我介绍"});
    // res.render('about');
    // res.sendFile(__dirname + '/views/about.html');
});

app.get('/article/:id', (req, res) => {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article',{title:entry.title, blog:entry});
    // res.render('article');
    // res.sendFile(__dirname + '/views/article.html');
});
app.use(express.static('public'));
app.listen(3000);