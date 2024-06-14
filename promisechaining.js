const cart = ["shoes", "pants", "kurta"];


createOrder(cart) 
    .then(function(orderId) {
     console.log(orderId);
     return orderId
    })
    .catch(function(err) {
        console.log(err.message)
    })

    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo)
    })
    

    function createOrder(cart) {

    }
    function proceedToPayment(orderId) {
        return new Promise((resolve, reject) => {
            resolve("Payment successful")
        })
    }

    function validateCart(cart) {
        return false;
    }