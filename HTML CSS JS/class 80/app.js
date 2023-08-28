var container = document.querySelector(".container")

function getPost() {
    console.log("getPost()")
    var data = []
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(function (data) {
            return data.json()
        })
        .then(function (response) {
            // console.log("then response", response)
            data = response
            console.log("data", data)

            for (var obj of data) {
                const card = `<div class="card">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>${obj.title}</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>`
                container.innerHTML += card
            }
        })
        .catch(function (error) {
            console.log("error", error)
        })



}


function callAPI() {
    console.log("callAPI")
    // https://jsonplaceholder.typicode.com/posts/
    // https://jsonplaceholder.typicode.com/todos/

    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(function (data) {
            return data.json()

        })
        .then(function (response) {
            console.log("then response post", response)
        }).catch(function (error) {
            console.log("post error", error)
        })


    fetch(" https://jsonplaceholder.typicode.com/todos/")
        .then(function (data) {
            return data.json()

        })
        .then(function (response) {
            console.log("then response todo", response)
        }).catch(function (error) {
            console.log("post error", error)
        })

}


// Promise
// async await