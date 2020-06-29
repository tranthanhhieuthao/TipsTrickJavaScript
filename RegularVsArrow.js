// let regularFun = {
//     name: 'js',
//     regularFun:function(id) {
//         console.log(this)
//         console.log(arguments)
//     },
//  arrowFun :() => {
//      console.log(this)
//      console.log(arguments)
//  }
// }
//  regularFun.regularFun(1,'js')
//  regularFun.arrowFun()

 var numbers = {
    one: 1,
    two: 2,
  };
  
  var keys = [];
  
  for (var number in numbers) {
      keys.push(number);
  }
  
  console.log(keys); // [ 'one', 'two' ]
 