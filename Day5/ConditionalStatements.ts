//if condition

//syntax
/*
if(condition){
    statement
}*/

//Example 1: if age is greater than or equal to 18 . The message "You are eligible to vote" should be printed.
// let age:number=15;
// if(age>=18){
// console.log("You are eligible to vote");

// }

//if else conditions
/*
if(condition){
statement
}
else{
    statement
    }
if condition is true then it will comes under if block else it will comes under else block .


*/

//Example 2 : If number is divisible by 2 then it is even else it is odd
/*
let n:number=11

if(n%2==0){
    console.log(`${n} Even Number`);
}
else{
    console.log(`${n} odd number`);
    
}

*/

//Nested if-else conditions
//Example 3: Dpeneding on the marks display appropriate grade
// let marks:number = 98
// if(marks>=90 && marks <= 100){
//     console.log("A");
    
// }
// else if(marks>=75 && marks < 90){
//     console.log("B");
    
// }
// else if(marks>=60 && marks < 75 ){
//     console.log("C");
    
// }
// else{
//     console.log("D");
    
// }

//switch case statements

//Example 4: Depending on the value of day , we will try to print the value of the day
// let day:number = 6
// switch(day){
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("Thursday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
//     case 7: console.log("Sunday");
//     break;
//     default: console.log("Invalid day!!");
// }

//swicth statement can also include an expression
//Example 5
let x:number=10 , y:number=5;
switch(x-y){
    case 0: console.log("Result is Zero");
    break;
    case 5: console.log("Result is five");
    break;
    default:console.log("Invalid result");
}