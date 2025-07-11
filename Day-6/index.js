// 1. MAP
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// 2. FOREACH
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
    console.log("Fruit:", fruit);
    });

// 3. FILTER
let nums = [10, 15, 20, 25, 30];
let filtered = nums.filter(num => num > 20);
console.log("Filtered numbers:", filtered);

// 4. REDUCE
let marks = [80, 90, 70, 85];
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total marks:", total);

// 5. EVERY
let smallnums = [1, 2, 3, 4, 5];
let allEven = smallnums.every((num) => num % 2 === 0);
console.log("All numbers are even:", allEven);

// 6. SOME
let ages = [18, 20, 22, 25];
let hasAdult = ages.some((age) => age >= 18);
console.log("Has at least one adult:", hasAdult);