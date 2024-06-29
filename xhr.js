// // // function fetchToDo() {
// // //   return new Promise((resolve, reject) => {
// // //     const url = `https://jsonplaceholder.typicode.com/todos/1`;
// // //     const xhr = new XMLHttpRequest();
// // //     xhr.open("POST", url, true);
// // //     xhr.setRequestHeader("User-Agent", "CustomUserAgent/1.0");
// // //     xhr.setRequestHeader("content-Type", "application/json");

// // //     xhr.onload = function () {
// // //       if (xhr.status === "200") {
// // //         const data = JSON.parse(xhr.responseText);
// // //         console.log("Fetched to do:", data);
// // //         resolve(data)
// // //       } else {
// // //         console.log("Error fetching :", xhr.statusText);
// // //         reject(xhr.statusText)
// // //       }
// // //     };
// // //     xhr.onerror = function () {
// // //       console.log("Error logged");
// // //       reject("Network Error")
// // //     };
// // //     const payLoad = JSON.stringify({
// // //         tittle: "foo",
// // //         body: "bar",
// // //         userId:1
// // //     })
// // //     xhr.send(payLoad);
// // //   });
// // // }
// // // fetchToDo()
// // //   .then((data) => console.log(data))
// // //   .catch((error) => console.log(error));


// // function fetchToDo() {
// //     return new Promise((resolve, reject) => {
// //       const url = `https://jsonplaceholder.typicode.com/todos`;
// //       const xhr = new XMLHttpRequest();
// //       xhr.open( url);
      
  
// //       xhr.onload = function () {
// //         if (xhr.status === "200") {
// //           const data = JSON.parse(xhr.responseText);
// //           console.log("Fetched to do:", data);
// //           resolve(data)
// //         } else {
// //           console.log("Error fetching :", xhr.statusText);
// //           reject(xhr.statusText)
// //         }
// //       };
// //       xhr.onerror = function () {
// //         console.log("Error logged");
// //         reject("Network Error")
// //       };
// //       const payLoad = JSON.stringify({
// //           tittle: "foo",
// //           body: "bar",
// //           userId:1
// //       })
// //       xhr.send(payLoad);
// //     });
// //   }
// //   fetchToDo()
// //     .then((data) => console.log(data))
// //     .catch((error) => console.log(error));
  

// function fetchData() {
//     console.log("Me first")
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log("Error fetching",error)
//     })
    
// }
// fetchData()


// async function sayJoke(apiUrl, jokeId){
//     try {
//       const api = await fetch(apiUrl);
//       if(!api.ok) {
//         throw new Error(`No jokes at url: ${apiUrl}`)
//       }
//     const api2 = await api.json();
//     if(Array.isArray(data.jokes)) {
//       throw new Error('No jokes at url: {url}')
//     }
//       const newJokes = api2.find(function jokes() {
//         return newJokes.id === jokeId;
//       })
//       if(!newJokes) {
//         throw new Error('No jokes found id: ${jokeId}')
//       }
//       return {
//         saySetup: () => console.log(newJokes.setup),
//         sayPunchLine: () => console.log(newJokes.punchLine)
//       };
    
//     } catch(error) {
//       console.log("Error", error.message)
//     }
    
//   }


