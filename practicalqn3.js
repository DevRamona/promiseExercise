// You are building a web application that needs to perform multiple asynchronous operations in parallel and handle their results once all of them are completed. Specifically, you need to fetch data from three different APIs and then process the combined results.

// Here are the requirements:

// 1. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/users`.
// 2. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/users`.
// 3. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/comments`.
// 4. Once all three fetch operations are completed, log the total number of users, posts, and comments in the console.

// async function fetchData() {
//     try {
//         const promise1 = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const promise2 = await promise1.json();
//     const promise5 = await fetch (`https://jsonplaceholder.typicode.com/comments`)
//     const promise6 = await promise5.json();
//     } catch(error) {
//         console.log("error")
//     }
    
// }
// fetchData();

async function fetchData() {
    try {
        const p1 = await fetch("https://jsonplaceholder.typicode.com/users");
        const p2 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const p3 = await fetch("https://jsonplaceholder.typicode.com/comments");
        const results = await Promise.all([p1, p2, p3]);

        const p11 = await p1.json();
        const p22 = await p2.json();
        const p33 = await p3.json();
        const result2 = await Promise.all([p11, p22, p33])

        console.log(`Total users: ${p11.length}`);
        console.log(`Total posts: ${p22.length}`);
        console.log(`Total comments: ${p33.length}`);
    } catch(error) {
        console.log("Detected error")
    }
}
fetchData();