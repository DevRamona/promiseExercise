const value = 5;
function double(value) {
    return new Promise((resolve, reject) => {
        resolve(value *2)
    })
}
function double(value) {
    return new Promise((resolve, reject) => {
        resolve(value *2)
    })
}
function addTen(value) {
    return new Promise((resolve, reject) => {
        resolve(value + 10)
    })
}
function multiplyByThree(value) {
    return new Promise((resolve, reject) => {
        resolve(value * 3 )
    })
}

double(value)
  .then(addTen)
  .then(multiplyByThree)
  .then((result) => {
    console.log(result);
  });