/**
 * once：只执行一次
 * memory: fire过一次后，会立即执行添加的函数
 * stopOnfalse: 如果返回false则立即停止
 * unique:唯一
 */
class CallBacks {
    constructor({once, memory, stopOnfalse, unique}){
        this.once = once
        this.memory = memory
        this.stopOnfalse = stopOnfalse
        this.unique = unique
        this.start = 0//标记从哪里开始执行
        this.queue = []
    }
    add(obj){
        if(this.unique && this.queue.includes(obj)){ // 如果唯一
            return
        }
        if(this.exec && this.memory){
            obj()
        }
        this.queue.push(obj)
    }
    fire(){
        // 标记为已执行
        this.exec = true
        for(let i = this.start ; i < this.queue.length ; i++){
            const result = this.queue[i]()
            if(this.stopOnfalse && result === false){
                break;
            }
        }
        // 如果只需要执行一次，执行开始位置为队列长度减1
        if(this.once){
            this.start = this.queue.length
        }

    }
}
