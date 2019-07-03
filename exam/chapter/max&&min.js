const arr = [156,8,7,4156,48,94,561,86,156,86,1,891,5,16,0]

function getMax(arr){
  return Math.max.apply(arr, arr)
}

function getMin(arr){
  return Math.min.apply(arr, arr)
}
// 编写函数 找出最大值最小值
console.log(getMax(arr))
console.log(getMin(arr))
