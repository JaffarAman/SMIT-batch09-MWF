var listParent = document.getElementById("listParent")
var loginUser;

window.addEventListener("load", function () {

    var userLogin = localStorage.getItem("loginUser")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }

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
                <button class="btn btn-info" onclick="editPost(${value.id} , this)" >EDIT</button>
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

        <button class="btn btn-info" onclick="editPost(${id} , this)" >EDIT</button>
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

function editPost(id, e) {
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index
            return true
        }
    })
    var editTitle = prompt("edit title", post.title)
    var editDesc = prompt("edit desc", post.desc)
    const editObj = {
        id: post.id,
        title: editTitle,
        desc: editDesc
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    var h5Title = e.parentNode.firstElementChild
    var pDesc = e.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = editTitle
    pDesc.innerHTML = editDesc


}


function logout() {
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
}