(function (root) {
    const _ = function(obj){
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    }
    _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
    }
    _.unique = function(arr,fn){ // 去重
        if(_.isArray(arr)){
            const result = []
            for(val  of arr){
                !_.contains(result,val, fn) && result.push(val)
            }
            return result;
        }
        return  arr
    }

    _.contains = function(arr,val, fn){
        fn = defaultFn(fn)
        if(!_.isArray(arr)){
           return true
        }
        return arr.includes(fn(val))
    }
    _.isArray = function(obj){
        return Array.isArray(obj)
    }
    _.map = function (obj,fn) {
        fn = defaultFn(fn)
        return obj.map(item => {
            return fn(item)
        })
    }
    _.filter = function (obj,fn) {
        fn = defaultFn(fn)
        return obj.filter(fn)
    }

    var defaultFn = function (fn) {
        return fn || function (val) {
            return val
        }
    }

    var result = function(instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
    };
    _.mixin = function(obj){
        const keys = Object.keys(obj)
        console.log(keys)
        keys.forEach(key => {
            obj.prototype[key] = function (fn) {
                return result(this,obj[key].call(_,this._wrapped,fn))
            }
        })
        return _
    }
    _.prototype.value = function() {
        return this._wrapped;
    };
    _.mixin(_)
    root._ = _
}(window))
