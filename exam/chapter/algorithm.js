// let testArr = [49,38,65,101,76,13,27,49,55,1]
let testArr = [6,2,7,3,8,9]
let arr = [...Array(100).keys()]
// 随机排序
function randomSort (arr) {
  return arr.sort(_ => Math.random() - 0.5)
}
// 冒泡排序
function bubbleSort (arr) {
  arr = arr.concat()
  let [i, j ] = [0, arr.length - 1]
  while (j > 1){
    for(i = 0; i < j ; i++){
        if(arr[i] > arr[i+1]){ // 如果前者大，交换位置
          [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
        }
    }
    j--
  }
  return arr
}
// 快速排序
function quickSort(array){
  const sort = function (arr) {
    let [key, i ,j] = [arr[0], 0 ,arr.length]
    if(i >= j){
      return
    }
    while (j-- > i) {
      if(arr[j] < key ){ // 找到小于key的值，交换
        [arr[i], arr[j]] = [arr[j], arr[i]]
        // 从i开始往后查找找到第一个大于key的值 ,交换
        while (i++ < j) {
          if(arr[i] > key ){ // 找到大于key的值，交换
            [arr[i], arr[j]] = [arr[j], arr[i]]
          }
        }
      }
    }
    return arr
  }
  return sort(array.concat())
}

const quickSort2 = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
    sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}
// 归并排序
//希尔排序
// let randomSortArr = randomSort(arr)
// console.log(randomSortArr.join(","))
console.log(bubbleSort(testArr))
console.log(quickSort(testArr))
