localStorage
console.log("Hello");
var name = ""
nae = "awdiz"

localStorage.setItem("token", "mytoken");

console.log(localStorage.getItem("token"), "getitem");

localStorage.removeItem("token")
localStorage.clear();

sessionStorage.setItem("token", "mytoken");

console.log(sessionStorage.getItem("token"))

// sessionStorage.removeItem("token")

sessionStorage.clear()

// nested loop

for(starting; ending ; sequence){
    code
    for (starting; ending ; sequence){
        code
    }
    code
}

// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $

// // Print pattern

for (let i = 1; i <= 5; i++) {
  var res = "";
  for (let j = 1; j <= 6; j++) {
    if (j == 6) {
      res += "$";
    } else {
      res += "$ ";
    }
  }
  console.log(res);
}

// i  1 - j 1 2 3 4 5 6
// i  2 - j 1 2 3 4 5 6
// i  3 - j 1 2 3 4 5 6
// i  4 - j 1 2 3 4 5 6
// i  5 - j 1 2 3 4 5 6
// i  6 - j 1 2 3 4 5 6





// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += "* ";
    console.log(res, "res in j");
  }
  console.log(res, "final res");
}

// 1 st iteration
// i = 1 ; i <= 5 ; 1 <=  5 true
// j = 1; j <= i ; 1 <= 1 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 1 false
// res = "* "

// 2nd iteration
// i = 2 ; i <= 5 ; 2 <=  5 true
// j = 1; j <= i ; 1 <= 2 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 3
// j <= i; 3 <= 2 false

// 3rd iteration
// i = 3 ; i <= 5 ; 3 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 4
// j <= i; 4 <= 3 false

// 4th iteration
// i = 4 ; i <= 5 ; 4 <=  5 true
// j = 1; j <= i ; 1 <= 4 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 5
// j <= i; 5 <= 4 false

// 5th iteration
// i = 5 ; i <= 5 ; 5 <=  5 true
// j = 1; j <= i ; 1 <= 5 true
// res += "* ";
// res = "* "
// j++ j 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ 6
// j <= i; 6 <= 5 false

// 6th iteration
// i = 6 ; i <= 5 ; 6 <=  5 false





// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += j + " ";
    }
    console.log(res);
  }


// 1 st iteration
// i = 1 ; i <= 5 ; 1 <=  5 true
// j = 1; j <= i ; 1 <= 1 true
// res += "j ";
// res = "1 "
// j++ j 2
// j <= i; ; 2 <= 1 false

// 2nd iteration
// i = 2 ; i <= 5 ; 2 <=  5 true
// j = 1; j <= i ; 1 <= 2 true
// res += "j ";
// res = "1 "
// j++ j 2
// j <= i; 2 <= 2 true
// res += "* ";
// res = "1 2 "
// j++ 3
// j <= i; 3 <= 2 false

// 3rd iteration
// i = 3 ; i <= 5 ; 3 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "j ";
// res = "1 "
// j++ j 2
// j <= i; 2 <= 3 true
// res += "j ";
// res = "2 "
// j++ j 3
// j <= i; 3 <= 3 true
// res += "j ";
// res = "3 "
// j++ 4
// j <= i; 4 <= 3 false
// res = "1 2 3 "

// 4th iteration
// i = 4 ; i <= 5 ; 4 <=  5 true
// j = 1; j <= i ; 1 <= 4 true
// res += "j ";
// res = "1 "
// j++ j 2
// j <= i; 2 <= 4 true
// res += "j ";
// res = "2 "
// j++ j 3
// j <= i; 3 <= 4 true
// res += "j ";
// res = "3 "
// j++ 4
// j <= i; 4 <= 4 true
// res += "j ";
// res = "4 "
// j++ 5
// j <= i; 5 <= 4 false
// res = "1 2 3 4 "

// 5th iteration
// i = 5 ; i <= 5 ; 5 <=  5 true
// j = 1; j <= i ; 1 <= 5 true
// res += "j ";
// res = "1 "
// j++ j 2
// j <= i; 2 <= 5 true
// res += "j ";
// res = "2 "
// j++ j 3
// j <= i; 3 <= 5 true
// res += "j ";
// res = "3 "
// j++ 4
// j <= i; 4 <= 5 true
// res += "j ";
// res = "4 "
// j++ 5
// j <= i; 5 <= 5 true
// res += "j ";
// res = "5 "
// j++ 6
// j <= i; 6 <= 5 false
// res = "1 2 3 4 5 "

// 6th iteration
// i = 6 ; i <= 5 ; 6 <=  5 false





// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20

for(let i = 1 ; i <=  10; i++){
    console.log("2" + " * " + i + " = " + ( 2 * i) )
}




// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10

for (let i = 1; i <= 5; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    // console.log(i, "i", j, "j");
    res += j * 2 + " ";
  }
  console.log(res);
}



// 1st iteration 
// i = 1; i <= 5; 1 <= 5 true 
// j = 1; j <= i ; 1 <= 1 true 
// res += i * 2 
// res = "2"


// 2nd iteration 
// i = 2; i <= 5; 2 <= 5 true 
// j = 1; j <= i ; 1 <= 2 true
// res += j * 2 
// res = "2"

// j = 2; j <= i ; 2 <= 2 true
// res += j * 2
// res = "2 4"


// 3rd iteration 
// i = 3; i <= 5; 3 <= 5 true 
// j = 1; j <= i ; 1 <= 3 true
// res += j * 2 
// res = "2"

// j = 2; j <= i ; 2 <= 3 true
// res += j * 2
// res = "2 4"

// j = 3; j <= i ; 3 <= 3 true
// res += j * 2
// res = "2 4 6"


// 4th iteration 
// i = 4; i <= 5; 4 <= 5 true 
// j = 1; j <= i ; 1 <= 4 true
// res += j * 2 
// res = "2"

// j = 2; j <= i ; 2 <= 4 true
// res += j * 2
// res = "2 4"

// j = 3; j <= i ; 3 <= 4 true
// res += j * 2
// res = "2 4 6"

// j = 4; j <= i ; 4 <= 4 true
// res += j * 2
// res = "2 4 6 8"


// 5th iteration 
// i = 5; i <= 5; 5 <= 5 true 
// j = 1; j <= i ; 1 <= 5 true
// res += j * 2 
// res = "2"

// j = 2; j <= i ; 2 <= 5 true
// res += j * 2
// res = "2 4"

// j = 3; j <= i ; 3 <= 5 true
// res += j * 2
// res = "2 4 6"

// j = 4; j <= i ; 4 <= 5 true
// res += j * 2
// res = "2 4 6 8"

// j = 5; j <= i ; 5 <= 5 true
// res += j * 2
// res = "2 4 6 8 10"

// 6th iteration
// i = 6 ; i <= 5 ; 6 <=  5 false