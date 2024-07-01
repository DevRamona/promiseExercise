const fetchUsers = async(userId) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const response = await data.json()
    return response
}
fetchUsers(1)
const fetchPosts = async(userId) => {
    const data2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const responses2 = await data2.json()
    return responses2;
}
fetchPosts(1)
const fetchCombined = async(userId) => {
    try {
        const users = await fetchUsers(userId)
        const posts = await fetchPosts(userId)

        const userProfile = {
            id: userId, 
            userInfo:users, 
            userPosts : posts
        }
            

        
        return userProfile

    } catch(error) {
        console.log(error.message)
    }

}
fetchCombined(1)
.then((info) => {
    console.log(info)
})
.catch((error) => {
    console.error("Can't fetch")
})