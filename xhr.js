function fetchToDo() {
  return new Promise((resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("User-Agent", "CustomUserAgent/1.0");
    xhr.setRequestHeader("content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status === "200") {
        const data = JSON.parse(xhr.responseText);
        console.log("Fetched to do:", data);
        resolve(data)
      } else {
        console.log("Error fetching :", xhr.statusText);
        reject(xhr.statusText)
      }
    };
    xhr.onerror = function () {
      console.log("Erro logged");
      reject("Network Error")
    };
    const payLoad = JSON.stringify({
        tittle: "foo",
        body: "bar",
        userId:1
    })
    xhr.send(payLoad);
  });
}
fetchToDo()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
