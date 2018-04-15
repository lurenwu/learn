//null表示"没有对象" 
//（1） 作为函数的参数，表示该函数的参数不是对象。
//（2） 作为对象原型链的终点。
// Object.getPrototypeOf(Object.prototype)
// null

//undefined表示"缺少值"

//（1）变量被声明了，但没有赋值时，就等于undefined。

//（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

//（3）对象没有赋值的属性，该属性的值为undefined。

//（4）函数没有返回值时，默认返回undefined。

//undefined表示变量声明但未初始化时的值，

//null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针。

//JavaScript（ECMAScript标准）里共有5种基本类型：
//Undefined, Null, Boolean, Number, String，
//和一种复杂类型Object。可以看到null和undefined分属不同的类型，未初始化定义的值用typeof检测出来是"undefined"(字符串)，而null值用typeof检测出来是"object"（字符串）。