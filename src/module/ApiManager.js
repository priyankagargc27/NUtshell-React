const remoteURL = "http://localhost:5002"


export default Object.create(null, {
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
    getAll: {
        value: (key,id) => {
            return fetch(`${remoteURL}/${key}?${id}`)
            .then(r => r.json())
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
    }
    // getAllArticles: {
    //     value: () => {
    //         return fetch("http://localhost:8088/articles?_order=desc&_sort=date").then(r => r.json())
    //     }
    // },
})