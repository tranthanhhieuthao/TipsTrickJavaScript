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
 const get = property => Object => Object[property]

 console.log(arr1.map(get('name')))
 console.log(arr2.map(get('id')))