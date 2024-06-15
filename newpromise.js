const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const inResolve = Math.random() > 0.5;
      if(inResolve) {
        resolve("Hello world!")
      } else{
        reject("Error occured")
      }
    },2000)
});
randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });