// async function showAvatar() {
//     let response = await fetch("https://javascript.info/promise-chaining");
//     let user = await response.json();

// let githubResponse = await fetch('https://api.github.com/users/${user.name}');
// let githubUser = await githubResponse.json();

// let img = document.createElement('img');
// img.src = githubUser.avatar_url;
// img.className = "promise-avatar-example";
// document.body.append(img);

// await new Promise((resolve, reject) => setTimeout(resolve, 3000));
// img.remove();
// return githubUser;
// }
// showAvatar();





async function showName() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let user = await response.json();
    console.log(user)
}
showName();












