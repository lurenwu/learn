var arr = [20,10,1,30,50,25]
var temp ;
for(var i=0; i< arr.length - 1;i++) {
    for(var j=0; j< arr.length - 1;j++) {
        if(arr[j]>arr[j+1]) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp
        }
    }
}
console.log(arr)