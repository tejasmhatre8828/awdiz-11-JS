

// // 1. Ternary Operators

let age = 15

 const isanAdult = (age >=18 ? "yes you are" : "Sorry you dont")
console.log(isanAdult)

 const ageCheck = age >=18 ? (age <= 60 ? "hey Its time to retire now" : "think again") : "Sorry are not ready for work"
console.log(ageCheck , "ageCheck")




// // 2. Template Literals

var userName = "Tejas"
var userSurname = "Mhatre"
var userAge = 22

let userinfo = `Hi I am ${userName} ${userSurname}. I am ${userAge} year old.`
console.log(userinfo , "is userinfo")






// // 3. Destructuring

// // Array 
let marks = [40, 50, 60, 70]
console.log(marks[0])
const [sub1, sub2, sub3, sub4] = marks
console.log(sub1, sub2, sub3, sub4, "sub1, sub2, sub3, sub4,")


// object
const myinfo = {name: "Tejas", surname: "Mhatre", age: 22}
console.log(myinfo.name)
const {name, surname, age} = myinfo
console.log(name, surname, age, "name, surname, age")





// 4. Callback Function


function greet(name, callback){
console.log("welcome", name)
callback()
}

function afterGreetingUserAskPermission(){
    console.log("Please accept my project")
}

greet("Tejas", afterGreetingUserAskPermission)




let userAge = 15
function iscapableforwork(age, yesFunction, noFunction){
    if (age >= 18){
        yesFunction()
    }
    else {
        noFunction()
    }
}

const successMessage = () => {
    console.log("you can work here")
}

function failorMessage(){
    console.log("Sorry! your are not capable")
}

iscapableforwork(userAge, successMessage, failorMessage)






// 5 . Promise

// // resolve, reject
// // then catch

let age = 16
const iscapableforwork = (age) => {
    return new Promise ((resolve, reject) => {
        if (age > 18) {
            resolve ("you can work here")
        } else {
            reject("Sorry! your are not capable")
        }
    })
}

iscapableforwork(age)
.then((response) => {
    console.log(response, "response")
})
.catch((error) => {
console.log(error, "error")
});




