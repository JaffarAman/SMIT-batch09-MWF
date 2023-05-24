// var str = new String("hello World")

// console.log(str.toUpperCase())
// console.log(this, "globals")

// function foo() {
//     console.log(this)
// }
// foo()

// var firstName = "ALI"
// var std1 = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     getFullName: function () {

//         return this.firstName + " " + this.lastName
//     }
// }

// var std1FN = std1.getFullName()
// console.log("std1FN", std1FN)
// // console.log(std1.firstName + " " + std1.lastName)

// var arr = [1, 2, 3, 45,]

// document.write(std1)

// var std1 = {
//     id: 10,
//     firstName: "John",
//     lastName: "Doe",
//     section: "Section A",
//     course: "Web & mobile App development",
//     subjects: [
//         {
//             name: "HTML",
//             mark: 80,
//         },
//         {
//             name: "CSS",
//             mark: 70,
//         },
//         {
//             name: "JAVASCRIPT",
//             mark: 40,
//         },
//         {
//             name: "Bootstrap",
//             mark: 60,
//         },
//     ],
//     getTotalMark: function () {
//         // console.log(this.subjects[0].mark)
//         // var totalMarks = this.subjects[0].mark + this.subjects[1].mark + this.subjects[2].mark
//         // console.log(totalMarks)
//         var totalMarks = 0;
//         for (var i = 0; i < this.subjects.length; i++) {
//             totalMarks += this.subjects[i].mark
//         }
//         return totalMarks
//     },
//     getPercentage: function () {
//         return (this.getTotalMark() / 400) * 100
//     }
// };



// var totalMarks = std1.getTotalMark()

// console.log(totalMarks, "totalMarks")
// console.log(std1.getPercentage())




var std1 = {
    id: 10,
    firstName: "John",
    lastName: "Doe",
    section: "Section A",
    course: "Web & mobile App development",
    subjects: [
        {
            name: "HTML",
            mark: 80,
        },
    ],
    getTotalMark: function () {
        var totalMarks = 0;
        for (var i = 0; i < this.subjects.length; i++) {
            totalMarks += this.subjects[i].mark
        }
        return totalMarks
    },
    getPercentage: function () {
        return (this.getTotalMark() / 400) * 100
    }
};