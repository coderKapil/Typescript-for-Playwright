//Fucntion overloading in TS
//step 1 write a signature of a function
//step 2 implement a function
//step 3 calling function

//Example 1 Different parameter types(Data Types)

// function getInfo(id:number):string
// function getInfo(name:string):string

// function getInfo(param:number | string):string{
//     if(typeof(param)==="number"){
//         return (`User ID is ${param}`);
        
//     }
//     else{
//         return (`User Name is ${param}`);
//     }
// }

// console.log(getInfo(1234));
// console.log(getInfo("KapilCoder"));

//Example 2: Different numbers of Parameters
/*
function add(a:number,b:number):number
function add(a:number,b:number,c:number):number

function add(a:number,b:number,c?:number):number{
     if(c !== undefined){
        return a+b+c;
     }
     else{
        return a+b;
     }
}

console.log(add(10,20));
console.log(add(1,2,3));
*/


//Examples 3: Different Return types

// function processInput(str:string):string
// function processInput(num:number):number

// function processInput(param: number | string):string | number{
//    if(typeof param === "string"){
//     return param.toUpperCase()
//    }
//    else{
//    return param * 2;
//    }
// }

// console.log(processInput(2));
// console.log(processInput("Hello world"));

//Example 4

function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string

function greet(input: number | string | boolean):string{
   if(typeof input === "string"){
      return (`Hello ${input}`)
   }
   else if(typeof input === "number"){
      return (`You are ${input} years old`)
   }

   else{
       let res:string =   input ? "Married" : "Single"
       return res;
   }
}

console.log(greet("John"));
console.log(greet(30));
console.log(greet(false));





