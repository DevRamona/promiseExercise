console.log("Start");
function waitFor(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Waited for ${duration} milliseconds.`)

        }, duration);
    });
}

async function runAsyncTasks() {
    const result5 = await waitFor(5000)
    console.log(result5)
    const result1 = await waitFor(2000)
    console.log(result1)
    const result2 = await waitFor(1000)
    console.log(result2)
}

runAsyncTasks()

console.log("End")