const url = `https://jsonplaceholder.typicode.com/posts`


const asyncTimeout = async(url, timeout = 5000) => {
    try {
        const data = await fetch(url)
        const response = await data.json()
        
        
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout '))
            },timeout)

        })
        const result = await Promise.race([response, timeoutPromise])
        if(!result.ok) {
            throw new Error(`HTTP Error : ${result.status}`)
        }
        return await result;

    } catch(error) {
        console.error(error.message)
    }
   

    
}
asyncTimeout(url, 5000)
.then((info) => {
    console.log(info)
})
.catch((error)=> {
    console.log(error.message)
}) 