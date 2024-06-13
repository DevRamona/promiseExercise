// const userleft = false;
// const userwatchingcatmeme = true;

// function watchTutorialCallback(callback,errorCallback) {
//     if(userleft) {
//         errorCallback({
//             name:'user left',
//             message: ':('
//         })
//     } else if (userwatchingcatmeme) {
//         errorCallback({
//             name:'user watching cat meme',
//             message: 'webdevsimplified < cat'
//         })
//     } else {
//         callback('thumbs up and subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log("Success:" + message)
// },(error) => {
//     console.log(error.name +" :"+ error.message)
// })

const userleft = true;
const userwatchingcatmeme = false;

function watchTutorialCallback() {
    return new Promise((resolve, reject) => {
        if(userleft) {
            reject({
                name:'user left',
                message: ':('
            })
        } else if (userwatchingcatmeme) {
            reject({
                name:'user watching cat meme',
                message: 'webdevsimplified < cat'
            })
        } else {
            resolve('thumbs up and subscribe')
        }
        
    })
    
}

watchTutorialCallback()
.then((message) => {
    console.log("Success:" + message)
})
.catch((error) => {
    console.log(error.name +" :"+ error.message)
})