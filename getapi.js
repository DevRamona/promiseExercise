// Using Promises, write a function that makes two API requests in parallel and logs both results.


const getAPI = async () => {
    try {
        const p1 = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await p1.json()

    const p2 = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data2 = await p2.json()

    const results = await Promise.all([p1, p2])
    console.log(results)

    } catch (errors) {
        console.log("Caught errors")
    }
    
}
getAPI()
 