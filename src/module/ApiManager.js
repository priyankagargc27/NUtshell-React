const remoteURL = "http://localhost:5002"


export default Object.create(null, {

    saveUserEntry: {
        value: (key,object) => {
            return fetch(`${remoteURL}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
                .then(response => response.json())
        }
    },

    getUsers: {
        value: (key,id) => {
            return fetch(`${remoteURL}/${key}/${id}`).then(r => r.json())
        }
    },



     post: {
        value: (key,object) => {
            return fetch(`${remoteURL}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
                .then(response => response.json())
        }
    },
    // getting users
    get: {
        value: (key,id) => {
            return fetch(`${remoteURL}/${key}?${id}`)
            .then(r => r.json())
        }
    },

    getAll: {
        value: (key) => {
            return fetch(`${remoteURL}/${key}`)
            .then(result => result.json())
        }
    },


    Delete: {
        value: (key, id) => {
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },



    edit: {
        value: (key, id, object) => {
            return fetch(`${remoteURL}/${key}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            })
            .then(result => result.json())
        }
    },


    getJoke: {
        value: () => {
           return fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
              .then(res => res.json())
              .then((result) => {
                 return result;
              },
                 // Note: it's important to handle errors here
                 // instead of a catch() block so that we don't swallow
                 // exceptions from actual bugs in components.
                 (error) => {
                    return error;
                 })
              }
        }
     
    // getAllArticles: {
    //     value: () => {
    //         return fetch("http://localhost:8088/articles?_order=desc&_sort=date").then(r => r.json())
    //     }
    // },
})