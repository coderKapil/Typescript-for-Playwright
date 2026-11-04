// var age:number = 30
// console.log(age);


// example 1: functional scope (var)
/*function varScope(){
    if(true){
        var msg = "Hello World"
          console.log(msg);
    }
    console.log(msg);
    
}
    */

// varScope()4

//Example 2: 
// let and const block scope
/*function blockScope(){
    if(true){
        let msg = "Hello World"
        const greet = "Hello"
          console.log(msg);
          console.log(greet);
          
    }
    // console.log(msg);//cannot access msg value outside the if block because of block scope
    // console.log(greet);
}

blockScope()
*/

//Example 3
// function scopeDiff(){
//     if(true){
//         var num1 =10
//         let num2=20
//         const num3=30
//         console.log(num1);
//         console.log(num2);
//         console.log(num3);
//     }
//          console.log(num1);//access
//         // console.log(num2);//cannot access
//         // console.log(num3);//cannot access
// }

// scopeDiff()

//Declarative/Value Assignment
//EXample1: var can be declared without initialization
// var x;//declaration
// console.log(x);//undefined
// x=30;//initialisation
// console.log(x);

//Example2: let can be declared without initialisation
// let y;//declaration
// console.log(y);//undefined
// y=30;//initialisation
// console.log(y);

//Example3: const must be initialised at the time of declaration
// const z=10;//decalration with initialisation
// console.log(z);
// // z=200//const value cannot be reassigned

//3 Redeclaration
// var allows the redeclaration
//let and const doesn't allows the redeclaration(making code safer)

//Example1: var allows the redeclaration
// var city="New York"
// var city = "Los Angeles"
// console.log(city);

//Example 2: let dono allows redeclaration
// let city = "Delhi"
// // let city = "Mumbai"; //error redeclare block scope variable
// console.log(city);

// //Example 3: const
// const country="India"
// // const country = "USA" //error redeclare block scope variable
// console.log(country);

//4)Reinitialisation/Re-assignmenmt
//var and let allows reassignment whereas const doesnot allows re assignment
// var x=10;
// x=12;
// console.log(x);

// let y="Delhi";
// y="Mumbai";
// console.log(y);

// const country="India";
// country="USA";
// console.log(country);

//5) Hoisting
// console.log(a);//undefined variable a is used before assign
// var a=5;
// console.log(a);//5

// console.log(a);//error cannot access a before initialisation
// let a=15;
// console.log(a);

// console.log(a);//error cannot access a before initialisation
// const a=20;
// console.log(a);











