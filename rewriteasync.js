// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }

//   async function loadJson(url) {
//     let response1 = await fetch(url);
//     if(response1.status == 200) {
//      const json = await response1.json();
//      return json;
//      } else {
//         throw new HttpError(response);
//       }
//     }

//   async function demoGithubUser() {
//    let user;
//    while(true) {
//     let name = prompt("Enter a name?", "iliakan");
//     try {
//         user = await 
//     }
//    }
//   }


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}
function f() {
wait().then((result) => console.log(result))
}
f();

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     // ...what should you write here?
//     // we need to call async wait() and wait to get 10
//     // remember, we can't use "await"
//   }