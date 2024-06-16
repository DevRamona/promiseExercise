// Using fetchSimulator simulate fetching data from three different URLs in parallel.

// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

// Use Promise.all to wait for all these Promises to resolve and then process the results.

const delays = [800, 1200, 1000];

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), delay));
};
const p1 = fetchSimulator("https://crocoder.dev/data1", delays[0]);
const p2 = fetchSimulator("https://crocoder.dev/data2", delays[1]);
const p3 = fetchSimulator("https://crocoder.dev/data3", delays[2]);

Promise.all([p1, p2, p3]).then((alldata) => {
    console.log(`All the responses`, alldata)
})
