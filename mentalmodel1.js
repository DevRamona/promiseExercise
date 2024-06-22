// Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

function displayNumber() {
    let count = 0;
  //   console.log(count)
  const interval = setInterval(()=>{
      console.log(count)
      count ++;
      
      
  },2000);
  setTimeout(() => {
    clearInterval(interval)

  },5000)
}
displayNumber();