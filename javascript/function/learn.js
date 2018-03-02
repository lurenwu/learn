function A() {
    var c = 1;
    A.prototype.print = function() {
        console.log("11");
    }
}
var a = new A();
a.print(); //构造函数


function createFunctions(){
    var result = new Array();
    for (var i=0; i < 10; i++){
      result[i] = function(){
        return i;
      };
    }
    return result;
  }
  var funcs = createFunctions();
  for (var i=0; i < funcs.length; i++){
    console.log(funcs[i]());
  } //输出10个10 闭包