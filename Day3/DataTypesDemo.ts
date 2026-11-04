//Number Type 1
//Represents both Integers and Floating types numbers
/*
let age:number=25;
let price=25.5
let big = 4242424242424242442424
console.log("Age: ",age)
console.log("price: ",price);
console.log("big: ",big);

console.log(typeof(age));
console.log(typeof age);
*/

//2. String Type
//Represents textual data
/*
1. Single quote (' ')
2. Double Quote ("")
3. Using Back Tick (``)
*/

// let firstname: string = " John"
// let lastname:string = " Kennedy"

//Hello John Kennedy
// let greeting = "Hello"+firstname+lastname
// console.log(greeting);

//using back ticks
// let greeting = `Hello ${firstname} ${lastname}`
// console.log(greeting);

//3. Boolean type
//Represents true and false

// let isStudent:boolean = true
// let hasJob:boolean = false

// console.log("isStudent?",isStudent);
// console.log("hasJob?",hasJob);

//4 . Null and undefine
//Special types for absence of values
/*
let emptyValues:null=null
let notAssigned:undefined=undefined

console.log(emptyValues); //null
console.log(notAssigned); //undefined

let price:number
console.log(price);//undefined
*/

//5.Any Type
//Looses typescript benefits
// let value:any = "welcome"
// console.log(typeof(value));
// value=100
// console.log(typeof value);
// value=true
// console.log(typeof value);

//6. UNION TYPES - Combine multiple types
// let id:number | string | boolean
// id="ABC123"
// console.log(id);
// id=12345
// console.log(id);
// id=true
// console.log(id);

//7. Void type for functions->used for functions that don't returns anything
// function sum():void{
//     console.log(10+20);
// }

// sum()

// function sum():number{
//     return(10+20)
// }

// let res:number = sum()
// console.log(res);

function sum(x:number , y:number){
    console.log(x+y);
    
}

sum(10,20)














