(function (root,global) {
  const jQuery = function(selector, context) {
    return new jQuery.prototype.init(selector, context)
  };
  jQuery.fn = jQuery.prototype = { //原型对象
    length: 0,
    selector: "",
    init: function(selector, context) {
      context = context || document;
      var match, elem, index = 0;
      //$()  $(undefined)  $(null) $(false)
      if (!selector) {
        return this;
      }

      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          match = [selector] //[<div><p>max</p></div>]
        }
        //创建DOM
        if (match) {
          //this   "<div><p>max</p></div>"
          jQuery.merge(this, jQuery.parseHTML(selector, context, true));
          //查询DOM节点
        } else {
          elem = document.querySelectorAll(selector);
          var elems = Array.prototype.slice.call(elem);
          this.length = elems.length;
          for (; index < elems.length; index++) {
            this[index] = elems[index];
          }
          this.context = context;
          this.selector = selector;
        }
      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
      }

    },
    text:function (value) {
      return jQuery.access(this, function (key,value){
        const nodeList = [].slice.call(this)
        value && nodeList.forEach(item => item.innerText = value)
        return value ? this:nodeList.map(item => item.innerText)
      },null,value)
    },
    css:function (key,value) {
      return jQuery.access(this, function (key,value){
        const nodeList = [].slice.call(this)
        value && nodeList.forEach(item => item.style[key] = value)
        return value ? this:nodeList[0].style[key]
      },key,value)
    },
    html:function (value) {
          return jQuery.access(this, function (key,value){
              const nodeList = [].slice.call(this)
              value && nodeList.forEach(item => item.innerHTML = value)
              return value ? this:nodeList.map(item => item.innerHTML)
          },null,value)
      },
      addClass:function (value) {
          return jQuery.access(this, function (key,value){
              const nodeList = [].slice.call(this)
              value && nodeList.forEach(item => item.className += ` ${value}`)
              return value ? this:nodeList.map(item => item.innerHTML)
          },null,value)
      },
      //目前写死
      animate:function (option, duration) {
          let len = this.length
          const elems = [].slice.call(this)
          const left_to = option.left.trim().replace("px","");
          const now = Date.now()

          elems.forEach(item => {
            let left_from = item.offsetLeft
            const distance = left_to - left_from
            let interval = setInterval(function () {
                const pass = Date.now() - now
                const percent = pass / duration
                //console.log(percent)
                if (percent >= 1) {
                    clearInterval(interval)
                    return
                }
                const left_now = left_from + percent * distance
                item.style.left = left_now + 'px'
            },13)
          })


      }
  }

  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.extend = jQuery.prototype.extend = function() {
    var target = arguments[0] || {};
    var length = arguments.length;
    var i = 1;
    var deep = false; //默认为浅拷贝
    var option;
    var name;
    var copy;
    var src;
    var copyIsArray;
    var clone;

    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1];
      i = 2;
    }

    if (typeof target !== "object") {
      target = {};
    }

    if (length == i) {
      target = this;
      i--; //0
    }

    for (; i < length; i++) {
      if ((option = arguments[i]) !== null) {
        for (name in option) {
          src = target[name];
          copy = option[name];
          if (deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }

  jQuery.extend({
    access:function( elems, fn, key, value){
      // const len = elems.length
      // const nodeList = [].slice.call(elems)
        value && fn.call(elems,key,value)
      return value ? elems : fn.call(elems, key, value)
    },
  })
  root.jQuery = root.$ = jQuery;
}(window))
