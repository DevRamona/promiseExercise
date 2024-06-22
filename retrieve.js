// // Write a JavaScript function that fetches data from an API and 
// retries the request a specified number of times if it fails.


async function retryRequests() { try{
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const response = await data.json()
    // console.log(response)
    let retries = 20;
    


} catch(error) {
    // let retries = 20;
    // const time = setTimeout(() => {
    //     if(retries > 20) {
    //         console.log("Error caught")
       
    //     }
    // },1000)

}
    
}
retryRequests();