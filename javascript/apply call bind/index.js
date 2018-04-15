Array.prototype.slice.call(arguments) //能将具有length属性的对象(key值为数字)转成数组。[]是Array的示例，所以可以直接使用[].slice（）方法。

var obj = {0:'hello',1:'world',length:2};
console.log(Array.prototype.slice.call(obj,0));//["hello", "world"]