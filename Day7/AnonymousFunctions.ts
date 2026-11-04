//Anonymous functions--> unnamed function/Nameless function
//Example synxtax
/*

let variable = function(parameter){
//function body
}
variable()//calling the functionm
*/

//Example 1: Anonymous function

// let msg = function():string{
//     return "Hello Typescript";
// }

// console.log(msg());

//Example 2: Anonymous functions with parameters
let multiply = function(a:number,b:number):number{
    return a*b;
}

console.log(multiply(10,20));

