//创建方式

var double = function(x) { return 2* x; } //右边的函数就是一个匿名函数

(function(x, y){
    alert(x + y);  
})(2, 3);  //立即执行函数 保护内部变量，防止被污染
