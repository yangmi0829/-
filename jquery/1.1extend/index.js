(function (root) {
    var jQuery = function(){
        return new jQuery.prototype.init();
    }

    jQuery.fn = jQuery.prototype = {
        init:function () {

        }
    }

    // 参数列表[deep!,target!,[...params]]  !表示非必传
    jQuery.fn.extend = jQuery.extend = function(){
            let obj = arguments[0] || {},
                target,
                length = arguments.length,
                i = 1,
                deepClone = false;
            //是否深拷贝
            if(toString.call(obj) === '[object Boolean]'){
                // 如果是布尔类型，赋值给deepClone ，同时i=2,obj取第二个参数
                deepClone = obj
                obj = arguments[1]
                i = 2
            }
            // 如果只有一个参数
            if(1 === length){
                obj = this
                i--
            }
            if(toString.call(obj) !== '[object Object]'){
                obj = {}
            }
            for(; i < length ; i++){
                target = arguments[i]
                for(const condition in target){
                    let copy = target[condition]
                    let src = obj[condition]
                    const isArray = toString.call(copy) === '[object Array]'
                    const isObject = toString.call(copy) === '[object Object]'
                    if(deepClone && (isArray ||  isObject)){//深拷贝
                        //判断类型 是否为数组和对象
                        //将对象在进行拷贝一次
                        obj[condition] = $.extend(deepClone, src || (isArray ? [] : {}) , copy )
                    }else{ //浅拷贝
                        obj[condition] = copy
                    }
                }
            }
            return obj
    }
    //共享原型对象
    jQuery.fn.init.prototype = jQuery.fn;
    root.$ = root.jQuery = jQuery;
})(this)
