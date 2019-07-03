const arr = [0,1,2,3,4,5,6,7,8,9]
//随机排序

function randomSort (arr) {
  return arr.sort(() => Math.random() - 0.5)
}
function randomSort3 (arr) {
  return arr.sort(() => Math.random() - Math.random())
}
function randomSort4 (arr) {
  return arr.sort(() => 0.5 - Math.random())
}

// 洗牌算法
function randomSort2 (arr) {
  let count = 0
  let len = arr.length
  let result = [...arr]
  while (count++ < len) {
    const index = ~~(Math.random() * len)
    result = [ ...result.splice(index,1),...result]
  }
  return result
}

console.log(randomSort(arr))
console.log(randomSort2(arr))
console.log(randomSort3(arr))
console.log(randomSort4(arr))
