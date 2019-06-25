const REGEX={
  braces:/^{(.+)}$/g,
  quotationMarks:/\"/g,
  colon:/:/g,
  comma:/^{(.+)}$/g,
  arrayStr: /^\[(.+)]$/g
}

function encode (str) {
  return encodeURIComponent(str)
}

function decode (str) {
  return decodeURIComponent(str)
}

function stringify (obj) {
  if(isObject(obj)){
    // {"name":"xesam","age":24,"list":[1,2,3]} => name=xesam&age=24&list=[1,2,3]
    let str = JSON.stringify(obj)
    str = removeBraces(str)// 去除两边花括号
    str = removeQuotationMarks(str)// 去除引号
    str = replaceColon(str)// 替换冒号
    str = replaceComma(str)// 替换逗号
    str = encode(str)// 编码
    return str
  }

  function removeBraces (str) {
      return str.replace(REGEX.braces,'$1')
  }

  function removeQuotationMarks (str) {
    return str.replace(REGEX.quotationMarks,'')
  }

  function replaceColon (str) {
    return str.replace(REGEX.colon,'=')
  }

  function replaceComma (str) {
    // return str.replace(REGEX.comma,'&')
    return str.replace(/(?<=\[.*?),(?=.*?\])/g, '|').replace(/,/g, '&').replace(/\|/g, ',')
  }


  throw new Error("请传入object类型")
}

function parse (str) {
  const obj = {}
  str = decode(str)
  const arr = str.split("&")
  arr.forEach(item => {
    const map = item.split("=")
    obj[map[0]] = getValue(map[1])
  })
  return obj
}

function getValue (str) {
  return REGEX.arrayStr.test(str) ? eval(str): str
}

function isObject (obj) {
  return toString.call(obj) === '[object Object]'
}



const qs = {
  stringify: stringify,
  parse:parse
}
const str = qs.stringify({
  name : '张三',
  age : 24,
  list: [1,2,3]
})
console.log(str)
console.log(qs.parse(str))

function test(str){
  const regex = /(\b.+\b)=(\b.+\b)\,/g
  return str.replace(regex,"$1=$2&")
}

console.log(test("name=张三,age=24,list=[1,2,3]"))
