async function fetchUserTodos() {
    try {
        const data1 = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data2 = await fetch(`https://jsonplaceholder.typicode.com/todos`);

        const resp1 = await data1.json();
        const resp2 = await data2.json();
        const result = Promise.all([resp1, resp2])

        const combined = resp1.map((user) => {
            return {
                ...user,
                todos: resp2.filter((todo) => {
                    todo.userId === user.id
                })
            }
        })
        return combined;



    }catch(error) {
        console.log("erororrss")
    }
    
}