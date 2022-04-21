const url = "http://localhost:5500/api"
const newUser = {
        name: "Diorge Cordeiro",
        avatar: "https://avatars.githubusercontent.com/u/57019920?v=4",
        city: "Florianópolis"
}
const userUpdated = {
    name: "Holly Flax",
    avatar: "http://lorempixel.com/400/200/",
    city: "Scranton"
}

function getUser() {
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUser()

function addNewUser() {
 axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser() {
    axios.put(`${url}/10`, userUpdated)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
// updateUser()

function deleteUser(){
    axios.delete(`${url}/11`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

// deleteUser()

function getOneUser() {
    axios.get(`${url}/4`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

// getOneUser()

