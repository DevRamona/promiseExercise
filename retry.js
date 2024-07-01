const url = `https://jsonplaceholder.typicode.com/users`
const retryAsync = (url, maxRetries = 5) {
    try {
        let retries = 0;
    if(retries < maxRetries) {
        const data = await fetch(url)

    }

    } catch(error) {
        console.error("Can't fetch")
    }
    

}