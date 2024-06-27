// logic statements
// if else
// else if
// nested if else
// ternory opr
// switch case
var marks = 70; // ex: 160
if (marks >= 90) { //(marks >=90 && marks <=100) (&&) logic lgaty hen agr marks 100 se ziada ho   
    console.log("grade: A1+");
}
else if (marks >= 80) {
    console.log("grade A+");
}
else if (marks >= 70) {
    console.log("grade: A");
}
else if (marks >= 60) {
    console.log("grade: B");
}
else if (marks >= 50) {
    console.log("grade: C");
}
else if (marks >= 40) {
    console.log("grade : D");
}
else {
    console.log("Fail");
}
// nested if else         // jahan if k andr if use kry usy nested if else kehty hen
var day = "Monday";
if (true) {
    if (day === "Monday") {
        console.log("Go to the work.");
    }
    else {
        console.log("Today is sunday");
    }
    if (day === "Tuesday") {
        console.log("This is 2nd day of week");
    }
    else {
        console.log("Today is a hot day");
    }
}
var weather = "sunny";
if (weather === "raining") {
    console.log("where a rain coat.");
}
else if (weather === "sunny") {
    console.log("wear a sun glasses");
}
else {
    console.log("weather is cloudy.");
}
//ex:
var calculator;
if (calculator === undefined) {
    var num1 = 56;
    var num2 = 90;
    var num3 = num1 + num2;
    console.log("the sum of ".concat(num1, " and ").concat(num2, " is ").concat(num3));
}
else {
    console.log("invalid number");
}
