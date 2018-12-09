//1.jsonp JSONP只支持GET请求
 
var http = require('http');

var server = http.createServer((req, res) => {
  var sendObj = {
    url: req.url,
    name: 'test'
  };
  res.write(`callback(${JSON.stringify(sendObj)})`);
  res.end();
});

server.listen(9999, () => {
  console.log('started.')
});



{/* 打开这个页面后，我们会看到控制台会输出一个对象Object {url: "/abc", name: "test"}, 也就是后端返回的对象。

当使用script请求地址时，会将返回的字符串，默认当成js解析。由于后端返回是的callback(xxx),所以会调用本地的callback函数。

从原理上来看，要使用JSONP，必须要后端返回相应的数据，这个就是JSONP的模式了，允许客户端传递一个callback函数，后端将数据包裹在callback函数中返回。

从原理也能看出，JSONP并不要求必须传递JSON格式的数据，只要是JS函数能够认可的数据都是可以传递的 */}

{
/* 2.document.domain 
使用条件：

有其他页面 window 对象的引用。
二级域名相同。
协议相同。
端口相同。 
主要用在iframe
*/}

{/* x.one.example.com 和 y.one.example.com 可以将 document.domain 设置为 one.example.com，也可以设置为 example.com。 */}

{/* 3.反向代理（将跨域代理为同域，绕过）
既然跨域有限制，那么我们可以考虑将跨域变成同域，这样不就没有限制了么？

以 Nginx 为例，我们只需要将特定路径的请求转发给真正的后端API即可： */}

{/* 4.cors 跨域资源共享 */}

{/* withCredentials 属性
CORS请求默认不发送Cookie和HTTP认证信息。如果要把Cookie发到服务器，
一方面要服务器同意，指定Access-Control-Allow-Credentials字段。
ccess-Control-Allow-Credentials: true
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号 */}

