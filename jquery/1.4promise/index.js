const stateArr =  ['padding','resolve','reject']
class MyPromise {
  constructor (fn){
    this.state = stateArr[0]
    this.successCallback = []
    this.errorCallback = []
    fn(this.resolve.bind(this),this.reject.bind(this))
    return this
  }
  done(state,args , queue ){
    this.state = state
    setTimeout(function () {
      queue.forEach((callback, index, arr)=> {
        callback(args)
      })
    }.bind(this), 0);
    return this
  }
  all(){}
  resolve(){
    if(this.state === stateArr[0]) {
      const args = Array.prototype.slice.apply(arguments)
      this.done(stateArr[1], args, this.successCallback)
    }
    return this
  }
  reject(){
    if(this.state === stateArr[0]){
      const args = Array.prototype.slice.apply(arguments)
      this.done(stateArr[2],args ,this.errorCallback)
    }
    return this
  }
  then(fn){
    this.successCallback.push(fn)
    return this
  }
  catch(fn){
    this.errorCallback.push(fn)
    return this
  }
}
