class MyQueue {
    constructor(){
        this.obj = {}
    }
    queue(name, fn){
        !this.obj[name] && (this.obj[name] = [])
        this.obj[name].push(fn)
    }
    dequeue(name){
        const fn = this.obj[name].shift()
        fn && fn.call(this, this.dequeue.bind(this,name))
    }
}
