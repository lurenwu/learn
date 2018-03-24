


// 引用模块
const http = require('http')
var foo = require('./foo.js')
let index = 0;
const logTime = (context, text) => (context.body += '说啥'+text + ': ' + new Date().getTime() + '<br/>')
// 创建一个服务
http.createServer(async (request, response) => {
  const context = {
    // 主体内容
    body: '',
    // 状态
    status_code: 200,
    // 头
    header: {
      // 内容类型
      'Content-Type': 'text/plain;charset:utf-8'
    },
    // 是否继续?
    isNext: true
  }
  try {
    foo(request, response,context)
  } catch(e){
    console.log(e)
  }
  response.writeHead(context.status_code, context.header)
  
  response.write(context.body)
  response.end()
  // 监听3000端口
}).listen(3000)

