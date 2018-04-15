// 事件冒泡
// 子元素的事件被触发的时候，该事件会从事件源逐级向上传播，触发父级元素的点击事件
// stopPropagation()方法可以阻止事件冒泡（IE中为cancleBubble=true）

<div id="parent" style="background-color: #000;height: 400px;width: 400px" data-id="444">  
  <div id="child" style="background-color: #fff;height: 200px;width: 200px" data-id="555"></div>  
</div>  
document.getElementById('parent').onclick=function () {  
  console.log(this.getAttribute('data-id'));  
};  
document.getElementById('child').onclick=function () {  
  console.log(this.getAttribute('data-id'));  
};  


// 事件委托
// 就是将子元素的事件通过冒泡的形式交由父元素来执行
// 优点 减少DOM操作 动态增加的DOM起作用 