// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.


function retriesData(url, maxRetries) {
    return new Promise((resolve, reject) => {
        let retries = 0;
        const fetchData = () => {
            fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status:${response.status}`);
                }
                return response.json()
            })
            .then(data => resolve(data))
            .catch(error => {
                retries++;
                if(retries <= maxRetries) {
                    console.log(`Request failed. Retrying (${retries} / ${maxRetries})`);

                } else {
                    reject(new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`));
                }
            })
        }
        fetchData();
    })

}
const url = 'https://jsonplaceholder.typicode.com/posts';
console.log("URL-> ",url);
const maxRetries = 3;
retriesData(url, maxRetries)
.then(data => {
    console.log("Fetched data:", data )
})
.catch(error => {
    console.log("Caught error:", error)
})