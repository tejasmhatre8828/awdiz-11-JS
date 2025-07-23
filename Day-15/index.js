// function outerfunction() {
//     let counter = 0;
//     function innerfunction() {
//         counter++;
//         console.log(counter)

//     }
//     return innerfunction;
// }

// const count = outerfunction()
// count()



// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello, ${this.name}1`)
//     }
// }

// class Student extends User {
//     info() {
//         console.log(`Hello, ${this.name} 1234`)
//     }
// }
// const myuser = new User("Tejas");
// myuser.greet();
// const mystudent = new Student("Mhatre");
// mystudent.info();

// spiral
var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let left = 0;
let right = nums[0].length - 1;
let top = 0;
let bottom = nums.length - 1;

const result=[];

while (left <= right && top <= bottom) {

    for (let i = left; i <= right; i++) {
        console.log(nums[top][i]);
        result.push(nums[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
        console.log(nums[i][right]);
        result.push(nums[i][right]);
    }
    right--;

    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            console.log(nums[bottom][i]);
            result.push(nums[bottom][i]);
        }
        bottom--;

    }
    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            console.log(nums[i][left]);
            result.push(nums[i][left]);
        }
        left++;
    }
}
console.log(result.join(" "), "result")


// z
var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

var nums = [
    [1, 2, 3, 4]
    [5, 6, 7, 8]
    [9, 10, 11, 12]
    [13, 14, 15, 16]
]

let left = 0;
let right = nums[0].length - 1;
let top = 0;
let bottom = nums.length - 1;

const result = [];

for (let i = left; i <= right; i++) {
    console.log(nums[top][i]);
    result.push(nums[top][i]);
}
top++;
left++;

for (let i = top; i <= bottom - 1; i++) {
    console.log(nums[i][left]);
    result.push(nums[i][left]);
}
top++;
left--;
// left--;

for (let i = left; i <= right; i++) {
    console.log(nums[top][i]);
    result.push(nums[top][i]);
}

console.log(result.join(" "), "result")


// N
var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// var nums = [
//     [1, 2, 3, 4]
//     [5, 6, 7, 8]
//     [9, 10, 11, 12]
//     [13, 14, 15, 16]
// ]

let left = 0;
let right = nums[0].length - 1;
let top = 0;
let bottom = nums.length - 1;

const result = [];

for (let i = bottom--; i >= top; i--) {
        console.log(nums[i][left]);
    result.push(nums[i][left]);
}
top++;
left++;

for (let i = top; i <= bottom; i++) {
    console.log(nums[i][left]);
    result.push(nums[i][left]);
}
top++;
left++;
bottom++;


for (let i = bottom; i <= top; i--) {
    console.log(nums[i][right]);
    result.push(nums[i][right]);
}

console.log(result.join(" "), "result")
