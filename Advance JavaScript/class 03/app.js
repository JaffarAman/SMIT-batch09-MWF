

// const productArr = [
//     {
//         name: "kuch bhi",
//         id: 10,
//         company: "nokia"
//     },
//     {
//         name: "kuch bhi",
//         id: 10,
//         company: "realme"
//     },
//     {
//         name: "kuch bhi",
//         id: 10,
//         company: "pixel"
//     },
//     {
//         name: "kuch bhi",
//         id: 10,
//         company: "nokia"
//     }

// ]


// const searchproduct = (ele) => {
//     // console.log("ele", ele.value)
//     const filterData = productArr.filter((product) => {
//         // console.log(product)
//         if (product.company.startsWith(ele.value.toLowerCase())) {
//             return true
//         }

//     })
//     console.log("filterData", filterData)

// }



// const foo = (name , ...args) => {
//     console.log(args)
//     // console.log(name, "name")
// }


// foo("Jaffar", 22, "Karachi", "Pakistan", 500, 1100)


// const obj = {
//     name: "kuch bhi",
//     id: 10,
//     company: "nokia"
// }

// const keys = Object.keys(obj)
// const values = Object.values(obj)

// console.log(keys)
// console.log(values)


// classes


// class Std {

//     constructor(fname, userage, useremail) {
//         this.name = fname;
//         this.age = userage;
//         this.email = useremail
//     }

//     getName() {
//         return this.name
//     }



// }


// const std1 = new Std("JAffar", 22, "jaffar@gmail.com")
// console.log(std1)




class Std {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


class WMDStd extends Std {
    constructor(courseName, islaptop, name, email) {
        super(name, email)
        this.name = name;
        this.email = email;
        this.courseName = courseName;
        this.islaptop = islaptop;



    }


}


const std1 = new WMDStd("Jaffar", "jaffar@gmail.com", "WEB AND APP", true)
console.log(std1)

class AIStd extends Std{
    
}