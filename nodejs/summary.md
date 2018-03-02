node 采用浏览器V8引擎处理javascript脚本,采用单线程运行，一次只能执行一个任务，所以导致Node采用大量的异步操作，即任务不是马上执行，而是插入到任务队列的尾部，等待前面的任务完成后再执行
require()：用于加载模块。
Buffer()：用于操作二进制数据。
__filename：指向当前运行的脚本文件名。
__dirname：指向当前运行的脚本所在的目录。
http：提供HTTP服务器功能。
url：解析URL。
fs：与文件系统交互。
querystring：解析URL的查询字符串。
child_process：新建子进程。
util：提供一系列实用小工具。
path：处理文件路径。
crypto：提供加密和解密功能，基本上是对OpenSSL的包装。