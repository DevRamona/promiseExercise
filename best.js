 function getPost() {
     

      return fetch("https://jsonplaceholder.typicode.com/posts")
     

 }
 getPost()
 .then(res => res.json())
 .then(data => console.log(data))

// async function getPost() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const response = await data.json();
//   console.log(response);
// }
// getPost()
