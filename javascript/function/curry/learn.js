//柯里化（curry） ： 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

var add = function(x) {
    return function(y) {
        return x + y;
    }
}
var increment = add(1);
var addTen = add(10);

increment(2); //3
addTen(2);


var curry = require('lodash').curry;
var match = curry(function(what, str){
    return str.match(what);
})

var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement)
})

var filter = curry(function(f, any){
    return aary.filter(f);
})
match(/\s+/g, 'hello word') // [' ']

match(/\s+/g,)('hello word') // [' ']
