const timeOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`complete in ${t}`), t)
    })
}
const duration = [1000, 2000, 4000]
const promiseAll = []
duration.map(t => {
promiseAll.push(timeOut(t))
})
Promise.all(promiseAll).then(res => console.log(res))

const promiseWithoutReject = [
    Promise.resolve('123'),
    new Promise((resolve,reject) => resolve('abc')),
    Promise.reject('errro')
]
Promise.all(promiseWithoutReject).then(res => console.log(res)).catch(er => console.log(er))
