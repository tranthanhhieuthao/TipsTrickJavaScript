let regularFun = {
    name: 'js',
    regularFun:function(id) {
        console.log(this)
        console.log(arguments)
    },
 arrowFun :() => {
     console.log(this)
     console.log(arguments)
 }
}
 regularFun.regularFun(1,'js')
 regularFun.arrowFun()
 