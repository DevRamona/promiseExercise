// // 1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos concurrently
// //  from the provided API endpoints and combine them based on the `userId`.
// //  The function should return a promise that resolves with the combined data.
// // - Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
// // - Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos) The returned promise should resolve into an array of users, where each user object has a new key `todos`.
//  This key should contain an array of todos that belong to the user, determined by matching the `userId` of the todo with the `id` of the user. User objects may look like

async function fetUserTodos() {
  try {
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const response = await users.json();

    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const resp = await todos.json();

    const result = await Promise.all([response, resp]);
    // console.log(result)

    const userObj = response.map((user) => ({
      userId: user.id,
      name: user.name,
      todos: resp.filter(todo => todo.userId === user.id),
    }));
    console.log(JSON.stringify(userObj, null, 2));
  } catch (error) {
    console.log("Error fetched", error);
  }
}
fetUserTodos();
