const usertime = true;
const p =Promise.resolve(1)
const p2 = 1337
const p3 = new Promise((resolve, reject) => {
    if(usertime) {
        reject(
            {
                name:"best",
                message:"hooray"
            })
    } else {
        resolve();
    }
}) 
Promise.allSettled([p, p2, p3])
.then((result) => console.log(result))