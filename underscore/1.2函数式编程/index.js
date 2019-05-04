(function (root) {
    const _ = function(obj){
        // console.log("aaa")
        if (obj instanceof _) return obj;
        // console.log("bbb")
        if (!(this instanceof _)) return new _(obj);
        // console.log("ccc")
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
        return obj.map((item,index , array) => {
            return fn(item,index , array)
        })
    }
    _.filter = function (obj,fn) {
        fn = defaultFn(fn)
        return obj.filter(fn)
    }

    var defaultFn = function (fn) {
        return fn || function (val,index, array) {
            return val
        }
    }

    var result = function(instance, obj) {
        // console.log(obj)
        return instance._chain ? _(obj).chain() : obj;
    };
    _.mixin = function(obj){
        const keys = Object.keys(obj)
        // console.log(keys)
        keys.forEach(key => {
            obj.prototype[key] = function (fn) {
                const args = [this._wrapped,...[].slice.call(arguments)]
                // console.log(args)
                return result(this,obj[key].apply(_,args))
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
