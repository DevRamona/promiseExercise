
    const p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("P1 SUCCESS")
    }, 1000)
})
p1.then((message) => {
    console.log(message)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject("P2 fail")
    }, 3000)
})
p2.then((message) => {
    console.log(message)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("P3 SUCCESS")
    }, 2000)
})
p3.then((message) => {
    console.log(message)
})
Promise.all([p1, p2, p3]).then((result) => {
    console.log(result)
}).catch((error)=> {
    console.error("Error faced")
})



