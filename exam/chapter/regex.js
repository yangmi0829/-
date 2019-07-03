// 密码正则 6-12位  由数字大小写字母组成，至少两种字符
// 钱正则 3位加逗号

const password_regex = /^(?!\d{6,12}$)(?![a-zA-Z]{6,12}$)(\w{6,12}$)/g
const money_regex = /(?=(\d{3})+(?!\d))/g
console.log(password_regex.test("012345678910"))
console.log("1234567890".replace(money_regex,",") )
