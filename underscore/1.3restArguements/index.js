function restArguements(fn) {
    const fn_len = fn.length // 原来的参数个数
    return function () {
        const arg_length = arguments.length // 传递的参数个数
        const args = [].slice.call(arguments) //参数数组
        const  startIndex = Math.max(arg_length - fn_len , 0 )
        const  arr = args.slice(0, fn_len - 1)
        arr[fn_len - 1] = args.slice(fn_len - 1)
        console.log(arr)
        switch (startIndex) {
            case 0:
                return fn.call(this);
            default:
                return fn.apply(this,arr)
        }
    }
}
