


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
    
    // 请求返回的状态嘛 以及内容类型
    // response.writeHead(200, { 'Content-Type': 'text/html' })
    // 在请求中写入以下文字
    logTime(response,'开始');
  //   sleep(request, response, ()=>{
  //     sleep(request, response, ()=>{
  //         sleep(request, response, ()=>{
  //             sleep(request, response, ()=>{
  //                 sleep(request, response, ()=>{
  //                     sleep(request, response, ()=>{
  //                         // 请求处理结束
  //                         response.end()
  //                     })
  //                 })
  //             })
  //         })
  //     })
  //   })
    await sleep(request, response, context)
    await sleep(request, response, context)
    await sleep(request, response, context)
    await sleep(request, response, context)
    await sleep(request, response, context)
      
  } catch(e){
    console.log(e)
  }
  response.writeHead(context.status_code, context.header)
  
  response.write(context.body)
  response.end()
  // 监听3000端口
}).listen(3001)

function sleep(request, response, context){
  if (!context.isNext) return Promise.resolve()
  return new Promise(resolve => {
    if (Math.random() > 0.5) {
      const error = `sleep ${index} 中间件报错`
      context.body = JSON.stringify({
        code: 1,
        msg: error
      })
      context.status_code = 500
      context.header['Content-Type'] = 'text/json;charset=utf-8'
      context.isNext = false
      throw new Error(error)
    }
    setTimeout(() => {
      console.log(context)
      logTime(context, index++)
      context.header['Content-Type'] = 'text/html;charset=utf-8'
      resolve()
    }, 1000)
  })
}
