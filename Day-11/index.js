// Ternary Operator  JS and HTML



// if else
// if( condition ){
//     statement true
// } else {
//     statement false
// }

let age = 20;

if(age >= 18 ){
    console.log("Yes can vote.")
} else {
    console.log("No cant vote.")
}


// syntax
//  condition ? statement true : statement false

let age1 = 100;

const canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote, "canVote");

const strictCheckVote = age1 >= 18 ? (age1 <= 80 ? "Yes" : "Over aged") : "No";
console.log(strictCheckVote, "strictCheckVote");






// 2. Template Literals

// ` text ${ varible name } text `

var userName = "Tejas";
var userSurname = "Mhatre";

var calculation = 10 - 0;

console.log("Hello name , welcome to insititute. " +  userName);

let greetingMessage = `Hello ${userName} ${userSurname} ${calculation}, Welcome to Institute.`;
console.log(greetingMessage, "greetingMessage");







// 3. Destructuring

let usersAge = [23, 25, 26];
// console.log(usersAge[0]);
const [firstValue, b, c] = usersAge;
console.log(firstValue, b, c, "a,b,c");






const userData = { name: "Awdiz", age: 10, surname: "Institute" };
// console.log(userData.name);
const { name, age, surname } = userData;
console.log(name, age, surname, "name , age");









// 4. Callback Function

function greet(name, callback) {
  console.log("Welcome ", name);
  callback();
}

function afterGreetingUserAskPermission() {
  console.log("Please accept privacy policy.");
}

greet("Awdiz", afterGreetingUserAskPermission);







let userAge = 15;
function canVote(age, yesFunction, noFunction) {
  if (age >= 18) {
    yesFunction();
  } else {
    noFunction();
  }
}

const successMessage = () => {
  console.log("You can vote.");
};

function failorMessage() {
  console.log("You cant vote.");
}

canVote(userAge, successMessage, failorMessage);








// 5 . Promise

// resolve, reject
// then catch
let age = 15;
const canVote = (age) => {
  return new Promise((resolve, reject) => {
    //   new - new object create
    //   contrcutor function - class  -> Promise((resolve, reject) => {
    if (age > 18) {
      resolve("Yes can vote.");
    } else {
      reject("No cant vote.");
    }
  });
};
 
canVote(age)
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.log(error, "error");
  });
