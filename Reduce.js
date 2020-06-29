// var arr = [2,6,7,8,1,4]
// var sum = arr.reduce((a,b) =>  a+b,0)
// console.log(sum)
// var muti = arr.reduce((a,b) => a*b,1)
// console.log(muti)
// var rese = arr.reduceRight((a,b) => (a.push(b), a), [])
// console.log(rese)
// // dùng reverse thì arr gốc bị thay đổi theo
// // var tem1 = arr.reverse()
// // console.log(tem1)
// var tem2 = arr.reduce((a,b) => [...a,b*2], [])
// console.log(tem2)
// //thay thế map
// var tem3 = arr.map(e => e*2)
// console.log(tem3)
// var tem4 = arr. reduce((a,b) => [...a,b*2], [])
// console.log(tem4)
// //thay thê fillter
// var tem5 = arr.filter(e => e>2)
// console.log(tem5)
// var tem6 = arr.reduce((a,b) => b>2 ? [...a,b] : a, [])
// console.log(tem6)
// //thay thế filter vs map
// var tem7 = arr.reduce((a,b) => b*2 >6 ? [...a,b*2] : a, [])
// console.log(tem7)
// var tem8 = arr.some(e => e >=9)
// console.log(tem8)
const list = [...new Array(100000).keys()];
// console.time('map')
// let result1 = 0;
// for (let i = 0; i < list.length; i++) {
//     result1 += i + 1;
// }
// console.timeEnd('map')
// console.time('map1')
// let result2 = 0;
// let length1 = list.length
// for (let i = 0; i < length1; i++) {
//     result2 += i + 1;
// }
// console.timeEnd('map1')
console.time('redu')
var sum = list.reduce((a,b) => a+b+1,0)
console.timeEnd('redu')
