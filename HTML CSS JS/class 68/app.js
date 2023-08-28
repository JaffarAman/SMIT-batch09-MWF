var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "who is the present president of pakistan",
        option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]

var startBtnWrapper = document.querySelector(".startBtnWrapper")
var quizWrapper = document.querySelector(".quizWrapper")
var resultWrapper = document.querySelector(".resultWrapper")
var quizQues = document.getElementById("quizQues")
var quizOptions = document.getElementById("quizOptions").children
var nextBtn = document.getElementById("nextBtn")

//Result elements
var totalQuesElement = document.getElementById("totalQuesElement")
var correctAnsElement = document.getElementById("correctAnsElement")
var wrongAnsElement = document.getElementById("wrongAnsElement")
var totalScoreElement = document.getElementById("totalScoreElement")

var counter = 0
var correctAnsCounter = 0
var wrongAnsCounter = 0
var totalScore = 0


for (var li of quizOptions) {
    li.setAttribute("onclick", "selectOption(this)")
}


function formHandler() {
    var formWrapper = document.querySelector(".formWrapper")
    var inputFields = formWrapper.querySelectorAll("input")

    //for of
    for (var input of inputFields) {
        console.log("input", input.value)
        if (!input.value) {
            alert("Enter required fields")
            return
        }
    }

    formWrapper.style.display = "none"
    startBtnWrapper.style.display = "flex"
}


function quizStart() {
    //hide next btn
    nextBtn.style.display = "none"
    startBtnWrapper.style.display = "none"
    quizWrapper.style.display = "block"

    quizQues.innerHTML = quesArray[counter].question
    quizOptions[0].innerHTML = quesArray[counter].option.a
    quizOptions[1].innerHTML = quesArray[counter].option.b
    quizOptions[2].innerHTML = quesArray[counter].option.c
    quizOptions[3].innerHTML = quesArray[counter].option.d
}


function nextQues() {
    if (counter < quesArray.length - 1) {
        counter++
        quizQues.innerHTML = quesArray[counter].question
        quizOptions[0].innerHTML = quesArray[counter].option.a
        quizOptions[1].innerHTML = quesArray[counter].option.b
        quizOptions[2].innerHTML = quesArray[counter].option.c
        quizOptions[3].innerHTML = quesArray[counter].option.d
    } else {
        //show result screen
        quizWrapper.style.display = "none"
        resultWrapper.style.display = "block"
        //set result values
        totalQuesElement.innerHTML = quesArray.length
        correctAnsElement.innerHTML = correctAnsCounter
        wrongAnsElement.innerHTML = wrongAnsCounter
        totalScoreElement.innerHTML = totalScore

    }
    for (var li of quizOptions) {
        li.classList.remove("disableLi")
        li.classList.remove("wrongAns")
        li.classList.remove("correctAns")
    }
    nextBtn.style.display = "none"




}


function selectOption(element) {

    if (element.innerHTML === quesArray[counter].answer) {
        correctAnsCounter++
        totalScore += 5
        console.log("answer true")
        element.className = "correctAns"
    } else {
        wrongAnsCounter++
        console.log("answer false")
        element.className = "wrongAns"

        for (var li of quizOptions) {
            console.log(li.innerHTML)
            if (li.innerHTML === quesArray[counter].answer) {
                li.classList.add("correctAns")
                break
            }
        }


    }

    for (var li of quizOptions) {
        li.classList.add("disableLi")
    }


    nextBtn.style.display = "block"



}