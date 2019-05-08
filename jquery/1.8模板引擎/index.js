/**
 * <%=%> 常量
 * <%-%> 特殊字符
 * <% %> js代码
 *
 * @type {string}
 */

const setting = {
  constants: /<%=\s*(.*?)\s*%>/,
  char: /<%-\s*(.*?)\s*%>/,
  code: /<%\s*(.*?)\s*%>/,
}
var regex = new RegExp(Object.values(setting).map(item => item.source).join("|"),'g')
function template (str) {
  return complier.bind(this,str)
}

function complier (str, data) {
  return str.replace(regex,function (match,constants,char,code) {
    if(constants){
      return data[constants]
    }else if(code){
      eval(`with (data || {}) {
        eval(code)
      }`)
      return ''
    }else if(char){
      return data[char]
    }
  })
}
