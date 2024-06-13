// const gitHub_api = "https://github.com/DevRamona"

// const user = fetch(gitHub_api);
// console.log(user);



// createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))

// .then((PaymentInfo)=>  showOrderSummary(PaymentInfo)
// )

const cart = ["shoes", "teeth", "pants"];
const promise = Createorder(cart);

promise.then(function(orderId) {
    console.log(orderId)
})
.catch(function(err) {
    console.log(err.message);
});

function Createorder(cart) {

    const newPromise = new Promise(function(resolve, reject) {
        if(!ValidateCart(cart)) {
            const err = new Error("cart is rejected")
            reject(err);
        }

        const orderId = ["1", "2", "3", "4", "5"]
       if(orderId) {
        setTimeout(function() {
            resolve(orderId);
        }, 5000)
        
       }
    })
    return newPromise;
}

function ValidateCart() {
    return false;
}