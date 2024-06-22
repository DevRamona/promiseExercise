// Write a function that takes a URL and fetches data from 
// that URL but aborts when the request takes more than 10ms

const url = "https://jsonplaceholder.typicode.com/posts"
const controller = new AbortController();
const time = setTimeout(() => {
    controller.abort()
},10)
const signal = controller.signal;
const getData = async(url) => {
    try{
        const data = await fetch(url, {signal});
        const response = await data.json();

    } catch(error) {
        console.log("Error caught")

    }
    


}
getData(url)