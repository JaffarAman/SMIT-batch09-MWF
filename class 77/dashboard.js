var listParent = document.getElementById("listParent")
var loginUser;

window.addEventListener("load", function () {
    var getUser = JSON.parse(localStorage.getItem("loginUser"))
    loginUser = getUser
    var fullName = this.document.getElementById("fullName")
    if (fullName) {
        fullName.innerHTML = "WELCOME" + " " + loginUser.fullName

    }

    if (listParent) {
        var getPosts = JSON.parse(localStorage.getItem("posts")) || []
        console.log(getPosts, "getPosts")
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-info">EDIT</button>
                <button class="btn btn-danger" onclick="deletePost(${value.id} , this)" >DELETE</button>
            </div>
        </div>`
        }

    }

})

///dashboard javascript
function addPost() {
    console.log("addPost")
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")


    if (!title.value || !desc.value) {
        alert("Please enter values")
        return
    }

    // // CARD DIV
    // var cardDiv = document.createElement("div")
    // cardDiv.classList.add("card")

    // // CARD BODY
    // var cardBodyDiv = document.createElement("div")
    // cardBodyDiv.classList.add("card-body")

    // // CARD TITLE
    // var cardTitle = document.createElement("h5")
    // cardTitle.classList.add("card-title")
    // cardTitle.innerHTML = title.value
    // cardBodyDiv.append(cardTitle)

    // // CARD TEXT
    // var cardText = document.createElement("p")
    // cardText.classList.add("card-text")
    // cardText.innerHTML = desc.value
    // cardBodyDiv.append(cardText)


    // // EDIT BUTTON
    // var editBtn = document.createElement("button")
    // editBtn.innerHTML = "EDIT"
    // cardBodyDiv.append(editBtn)
    // editBtn.classList.add("btn", "btn-info")


    // // DELETE BUTTON
    // var deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML = "DELETE"
    // deleteBtn.classList.add("btn", "btn-danger")
    // cardBodyDiv.append(deleteBtn)

    // //CARD DIV
    // cardDiv.append(cardBodyDiv)

    // console.log(cardBodyDiv, "cardBodyDiv")
    // listParent.append(cardDiv)

    // title.value = ""
    // desc.value = ""



    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    console.log("getPosts", getPosts)

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }


    var todoBox = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${desc.value}</p>

        <button class="btn btn-info">EDIT</button>
        <button class="btn btn-danger" onclick="deletePost(${id} , this)" >DELETE</button>

    </div>
</div>`
    // console.log(todoBox, "todoBox")
    // listParent.innerHTML += todoBox
    listParent.innerHTML = todoBox + listParent.innerHTML






    // if (getPosts == null) {
    //     id = 1
    // } else {
    //     console.log(getPosts[0])
    //     id = getPosts[0].id + 1
    // }


    var postObj = {
        id: id,
        title: title.value,
        desc: desc.value
    }

    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    // if (getPosts == null) {
    //     var array = []
    //     array.push(postObj)
    //     localStorage.setItem("posts", JSON.stringify(array))

    // } else {
    //     getPosts.unshift(postObj)
    //     localStorage.setItem("posts", JSON.stringify(getPosts))

    // }

    title.value = ""
    desc.value = ""

}

function deletePost(id, e) {
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var indexNum = getPosts.findIndex(function (value) {
        if (value.id === id) return true
    })
    getPosts.splice(indexNum, 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    //remove element
    e.parentNode.parentNode.remove()
}

