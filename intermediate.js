// Write a function that chains two Promises together, where the second Promise depends on the result of the first.


function getPromises() {
    const p1 = new Promise((resolve, reject) => {
        resolve("name")
    })
    return p1.then((result) => {
     return new Promise((resolve, reject) => {
        resolve(`Heelo`)
     })
    })
    
}

getPromises()
.then((data) => {
    console.log("Hooray")
}).catch((error) => {
    console.log("Caught error")
})