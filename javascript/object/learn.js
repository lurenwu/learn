
var AA = {a:11} //等价与var AA = new Object();
var BB = Object.create(AA); // BB 继承了AA的原型 ES5的新写法
console.log(BB.__proto__)

var o1 = { p1: 123 };
var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});
for (p in o2) {
  console.info(p);
}
// p2
// p1
var obj = new Object();
obj.__proto__ === Object.prototype // true
obj.__proto__ === obj.constructor.prototype// true

console.log(a.__proto__ , A.prototype)

console.log(a.__proto__ === A.prototype) //true

console.log(A.prototype.constructor)
var type = function (o){
    var s = Object.prototype.toString.call(o);
    console.log(s.toString())
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
type(5); // number
//Object.getPrototypeOf方法返回参数对象的原型
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true


//isPrototypeOf方法，用来判断该对象是否为参数对象的原型。
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true