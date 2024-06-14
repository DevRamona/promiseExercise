const container = document.getElementById('container');
function extractData(heading) {
    const title = document.createElement("h1");
    title.innerText = heading.toUpperCase();
    document.body.appendChild(title)

}

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();

    for(let i = 0; i<=10; i++) {
            extractData(data[i]["title"])
    }
}
fetchData();