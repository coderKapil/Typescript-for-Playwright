//Callback function a fucntion passed as an argument to another fucntion and execute it later is called callback fucntion

//Example 1:
/*
function greet(name:string,smg:(message:string)=>void){
    console.log(name);
    smg("Hello");
}

function showMessage(message:string):void{
    console.log(message);
}

// showMessage("Hello")
//calling the function by passing the callback function as an argument to another function
greet("John",showMessage)

*/

//Example 2

function sum(a:number,b:number,callback:(result:number)=>void){
    let result = a+b;
    callback(result)
}

//callback function 
function displayResult(result:number):void{
    console.log(result);   
}

sum(10,20,displayResult)