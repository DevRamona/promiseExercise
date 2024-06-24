function newFunction() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("result").textContent = data.message;
        console.log(data)
    })
}
newFunction()