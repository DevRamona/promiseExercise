const container = document.getElementById('container')

function createContainer(heading, paragraph, comment) {
    const parent = document.createElement('div');
    const title = document.createElement('h1');
    const para = document.createElement('p');
    const list = document.createElement('li');
    title.innerText = heading.toUpperCase();
    para.innerText = paragraph;
    list.innerText = comment;
    parent.appendChild(title);
    parent.appendChild(para);
    parent.appendChild(list);
    container.appendChild(parent);
    document.body.appendChild(container)
}

async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const info = await response.json()

    for(let i = 0; i<=10; i++) {
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/comments/${info[i]["id"]}`);
            const data2 = await response2.json()
            createContainer(info[i]["title"], info[i]["body"], data2.body)
    }
}
fetchPosts();