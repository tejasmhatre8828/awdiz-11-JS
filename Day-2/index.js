var age =61
if (age == 18) {
    console.log("You are eligible for driving license,");
}
else if (age > 18 && age <= 60) {
    console.log("You are a eligible for driving license");
}
else {
    console.log("You are not eligible for driving license");
}

var userselectedfruit = "mango";

switch (userselectedfruit) {
    case "apple":
        console.log("You selected apple");
        break;
    case "banana":
        console.log("You selected banana");
        break;
    case "orange":
        console.log("You selected orange");
        break;
    default:
        console.log("Please select a available fruit");
}