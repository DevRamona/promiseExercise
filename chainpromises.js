// const email = 'chriswater@mail.com';

// fetch("https://my_api_data.com/users?email=${email}`)
//   .then(response ⇒ response.json())
//   .then(userData ⇒ {
//     const userId = userData.id;
//     return fetch('https://my_api_data.com/posts?userId=${userId}`);
//   })
//   .then(response ⇒ response.json())
//   .then(userPosts ⇒ {
//     console.log("User's posts:", userPosts);
//   })
//   .catch(error ⇒ {
//     console.error("Error:", error);
//   });.

//   const email = 'ingabireeramona@gmail.com'
const chainPromises = async () => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response = await data.json();
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // console.log(response);
        // const info =  await fetch(`https://jsonplaceholder.typicode.com/posts`)
        // const resp = await info.json()
        for(let i =0; i <9; i++) {
            const access = response[i]
            const newAccess = access.id
            // console.log("User's post:", newAccess)
        }

        const newdata = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const otherData = await newdata.json();
        for(let i =0; i <5; i++) {
          const res = otherData[i];
          const newRes = res.url;
          console.log("The url:", newRes)
        }

        

        
        

        
  } catch (error) {
    console.log("ERROR CAUGHT");
  }
};
chainPromises();
