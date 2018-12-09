window.JSONP = function(url, callback){
  debugger
    callback = callback || 'callback';
    var result;
    return new Promise((resolve, reject) => {
      var overwritten;
      var scriptEl = document.createElement('script');
      scriptEl.src = url + '?callback=' + callback;
      //加载完成后，删除callback
      scriptEl.onload = function(){
        if(overwritten === undefined){
          delete window[callback];  
        }else{
          window[callback] = overwritten;
        }
        resolve(result);
      }
      //挂载一个callback到window上
      overwritten = window[callback]; //先保存一个，用完之后再还原
      window[callback] = function(data){
        result = data
      }
      document.head.appendChild(scriptEl);
    });
  };
  
  window.JSONP('http://localhost:9999').then((data) => {
    console.log(data);
  });