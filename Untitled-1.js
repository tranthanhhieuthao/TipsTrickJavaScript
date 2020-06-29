var obj = {key1: 'abc',key2: 12, key3: [1,2,5,7],key4: {name:'Hieu'},3:3}
var obj1 = {key1: 1, key:2,key:3}
const {key1,key2,key3,key4} = obj
console.log(key1)
var newObj ={...obj,key5:'hii'}
console.log(Object.keys(obj))
var ob =Object.create({})
//dung khi co the cho phep thay doi hoac khong thay 1 key trong object
Object.defineProperty(obj,'key1',{
    value:27,
    writable: false
})
var coppyOb = Object.assign(obj)
var coppyOb1 = {...obj}
var coppyOb2 = JSON.parse(JSON.stringify(obj))
console.log(coppyOb)
console.log(coppyOb1)
console.log(coppyOb2)
//phuong thuc dung de khong thay doi gia tri object
Object.freeze(obj)
obj.key5 = 43
obj.key1 = '123'
console.log(coppyOb)
function checkType(obj,type)  {
    for(let [key, value] of Object.entries(obj)) {
        if(typeof value === type) console.log(key)
    }
}

checkType(obj,'number')
