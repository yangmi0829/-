function f(obj, str='') {
    const keys = str.split(".")
    for(let i = 0 ; i < keys.length ; i++){
        obj = obj[keys[i]]
        if(!obj){
            break
        }
    }
    return obj
}
const obj = {
    person: {
        name:'zs',
        children:{
            name: 'child',
            list: [{name:'1'},2,3]
        }
    }
}


const regex = /(?!,)(.+?)=(\[.+?]|.+?(?=,|$))/g
const regex2 = /\w+=(\[.*?\]|[^,])+/g
//console.log('list=[1,2,3],name=xesam,list=[1,2,3],age=24,list=[1,2,3]'.match(regex))
const regex3 = /(?<=\[.*?),(?=.*?\])/g
const regex4 = /(?<=\[.+?),(?=.+?])/g
console.log('name=xesam,age=24,list=[1,2,3]'.replace(regex4,"|"))
