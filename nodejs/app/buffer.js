var m = require('./foo.js');
m("chenlin")
//Buffer对象是Node处理二进制数据的一个接口
var fs = require('fs');
var buffer = new Buffer(1024);

var readSize = fs.readSync(fs.openSync('/dev/tty', 'r'), buffer, 0, 1024);
var chunk = buffer.toString('utf8', 0, 1024);

console.log('INPUT: ' + chunk);

// 生成一个256字节的Buffer实例
var bytes = new Buffer(256);
// 遍历每个字节，写入内容
for (var i = 0; i < bytes.length; i++) {
  bytes[i] = i;
}

// 生成一个buffer的view
// 从240字节到256字节
var end = bytes.slice(240, 256);

end[0] // 240
end[0] = 0;
end[0] // 0
