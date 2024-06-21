// Create an `async` function that performs three asynchronous operations sequentially and logs the result of each.


async function getAsync() {
    try {
        const p1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Who's better")
            }, 1000)
        
        })
        console.log(p1)
        const p2 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("None")
            }, 2000)
            
        })
        console.log(p2)
        const p3 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("You can't")
            }, 3000)
            
        })
        console.log(p3)

    } catch(error) {

    }
    
}
getAsync();
