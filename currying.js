const add = a => b => a+b
console.log(add(1)(2))

var arr1 = [
    {
        id:1,
        name:'Hieu'
    },
    {
        id:2,
        name: 'Thao'
    },
    {
        id:3,
        name:'Chi'
    }
]
var arr2 = [
    {
        id:6,
        name:'XuanHai'
    },
    {
        id:7,
        name: 'Quang'
    },
    {
        id:9,
        name:'Chi'
    }
]
 const get = property => object => object[property]
arr1.map(e => e.id)
arr1.map(e => e.name)
arr2.map(e => e.id)
 console.log(arr1.map(get('id')))
 console.log(arr2.map(get('name')))