module.exports = function(request, response, context) {
    let body = ''
    switch (request.url) {
      case '/foo':
        body = 'Hello Foo!'
        break
      case '/bar':
        body = 'Hello Bar!'
        break
      default:
        body = 'Hello World!1'
    }
    context.body = body
}