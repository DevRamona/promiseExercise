const getAllUserEmails = async () => {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const response = await fetchData.json()
    // console.log(response)
    //  for(let i = 0 ; i < response.length; i++) {
    //     const getEmails = response[i].email;
    //     console.log(getEmails)
    //  }

    const getEmail = response.map(x => {
        return x.email
    })
    console.log(getEmail)
    
}
getAllUserEmails()