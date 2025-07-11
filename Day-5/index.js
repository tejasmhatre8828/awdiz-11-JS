1. Even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

2. Odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

2. Print 10 to 1 using while loop 
let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}


3. Table of 7 
for (let i=1; i<=10; i++){
    console.log("7x"+i+"="+ 7*i)
}


4. Odd numbers from 1 to 20 
for(let i=1; i<=20; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}


5. Count numbers divisible by 3 and 5 (1 to 100)
let count = 0;
for(let i=1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){
        count++;
    }
}
console.log(count)


6. Factorial of 6 using while loop 
let num=6
let fact=1
let i=1

while(i<=num){
    fact *=i
    i++
}
console.log(fact)

7. Sum from 1 to 100 
let sum=0
for(let i=1; i<=100; i++){
    sum=sum + i
}
console.log("sum is", +sum)

8. FizzBuzz using switch 
for (let i = 1; i <= 100; i++) {
    switch (true) {
        case (i % 3 == 0 && i % 5 == 0):
            console.log("FizzBuzz");
            break;
        case (i % 3 == 0):
            console.log("Fizz");
            break;
        case (i % 5 == 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}


9. First 10 Fibonacci numbers using while loop 
let n1 = 0, n2 = 1; 
console.log(n1); 
console.log(n2); 
let countFib = 1; 
while (countFib <= 8) { 
let next = n1 + n2; 
console.log(next); 
n1 = n2; 
n2 = next; 
countFib++; 
}


10. Squares from 1 to 10 
for (let i = 1; i <= 10; i++) {
    let square = i * i;
    if (square < 20) {
        console.log(square + " is Small");
    } else if (square <= 50) {
        console.log(square + " is Medium");
    } else {
        console.log(square + " is Large");
    }
}
