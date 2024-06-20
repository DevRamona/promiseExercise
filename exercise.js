const container = document.getElementById("container")
function getPost(heading, paragraph,comment ) {
    const parent = document.createElement('div');
    const head = document.createElement('h1')
    const para = document.createElement('p')
    const list = document.createElement('li')
    head.innerText = heading.toUpperCase();
    para.innerText = paragraph
    list.innerText = comment
    parent.appendChild(head)
    parent.appendChild(para)
    parent.appendChild(list)
    container.appendChild(parent)


}
async function fetchPost(){
    const  resp= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await resp.json()
    for(let simple=0 ;simple<=9; simple++) {
        const  resp= await fetch(`https://jsonplaceholder.typicode.com/comments/${data[simple]["id"]}`)
        const comm = await resp.json()
        getPost(data[simple]["title"], data[simple]["body"], comm.body)
    }
}
fetchPost()