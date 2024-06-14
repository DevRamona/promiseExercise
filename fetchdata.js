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


async function loadJson(url) {
    
        const fetched = await fetch(url);
        
            if(response.status == 200) {
                let json = await response.json();
                return json;
            } 
            throw new Error(response.status);
            
        
    }
    
    loadJson('https://javascript.info/no-such-user.json')
  .catch(alert);


//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404
