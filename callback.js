function newName(name, callback) {
    const myname = "I am" + name;
    callback(myname)
}

function surName(name) {
    console.log(name)
}

newName("Ramona", surName)