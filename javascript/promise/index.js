function Promise(fn) {
    var state = 'pending';
    var value;
    var deferred;
  
    function resolve(newValue) {
      value = newValue;
      state = 'resolved';
  
      if(deferred) {
        handle(deferred);
      }
    }
  
    function handle(onResolved) {
      if(state === 'pending') {
        deferred = onResolved;
        return;
      }
  
      onResolved(value);
    }
  
    this.then = function(onResolved) {
      handle(onResolved);
    };
  
    fn(resolve);
  }
  function doSomething() {
    return new Promise(function(resolve) {
      var value = 42;
      resolve(value);
    });
  }
  var promise = doSomething();

promise.then(function(value) {
  console.log('Got a value:', value);
});

promise.then(function(value) {
  // 此处获取的值和上一处相同
  console.log('Got the same value again:', value);
});