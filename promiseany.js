const pError = new Promise((resolve, reject) =>
    {
        reject("always reject")
    })
    const p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, "Done")
    })
    const p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, "End")
    })
    
    Promise.any([pError, p2,p3 ])
    .then((result) => {
        console.log(result)
    })

    const pError = new Promise((resolve, reject) =>
        {
            reject("always reject")
        })
        const p2 = new Promise((resolve, reject) => {
            reject("Done")
        })
        const p3 = new Promise((resolve, reject) => {
            reject("End")
        })
        
        Promise.any([pError, p2,p3 ])
        .then((result) => {
            console.log(result)
        })