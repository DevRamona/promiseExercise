const url = `https://jsonplaceholder.typicode.com/users/`
const retryAsync = async(url, maxRetries = 5) =>  {
    try {
        let retries = 0;
    if(retries < maxRetries) {
        const data = await fetch(url)
        const response = await data.json();
        return response;

    }

    } catch(error) {
        if(retries === maxRetries){
            console.error("Can't fetch, retries have exceeded")
            retries ++;

        }
        
    }
    

}
retryAsync(url, 3)
.then((data) => {
    if(data) {
        console.log(data)
    } else {
        console.log("Retries exceeded")
    }
})
.catch((error) => {
    console.log("Error logged")
})