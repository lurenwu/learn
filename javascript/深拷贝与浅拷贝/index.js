//作为一个新鸟，我是这样理解的：浅复制--->就是将一个对象的内存地址的“”编号“”复制给另一个对象。
//深复制--->实现原理，先新建一个空对象，内存中新开辟一块地址，
//把被复制对象的所有可枚举的(注意可枚举的对象)属性方法一一复制过来，
//注意要用递归来复制子对象里面的所有属性和方法，直到子子.....属性为基本数据类型。
//总结，深复制理解两点，1,新开辟内存地址，2,递归来刨根复制。

//浅拷贝
function shallowCopy(p,c){
    var i;
    c = c||{};
    for(i in p){
        if(p.hasOwnProperty(i)){
            c[i] = p[i];
        }
    }
    return c;
}
var dad = {
    count:[1,2,3],
    game:{Inside:true}
};
var kid = shallowCopy(dad);
kid.count.push(4);   
kid.count.toString(); // "1,2,3,4"
dad.count.toString(); // "1,2,3,4"
dad.game === kid.game;    // true


// 深拷贝

function deepCopy(p,c){
    var i;
    c = c||{};
    for(i in p){
        if(p.hasOwnProperty(i)){
            if(typeof(p[i])==="object"){
                c[i] = Array.isArray(p[i])?[]:{};
                deepCopy(p[i],c[i]);
            }else{
                c[i] = p[i];
           }
        }
    }
    return c;
}
var dad = {
    count:[1,2,3],
    game:{Inside:true}
};
var kid = deepCopy(dad);

kid.count.push(4);
kid.count.toString(); // "1,2,3,4"
dad.count.toString();  // "1,2,3"
dad.game === kid.game;  // false
kid.game.Inside = false;
kid.game.Limbo = true;
dad.game.Inside;   // true


//还不懂？？？ https://blog.csdn.net/qiqi_77_/article/details/79400900


