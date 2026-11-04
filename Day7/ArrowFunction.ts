//Arrow function
//Example 1 - Arrow function with no parameter adn no return type
// let greet = ():void=>
// {
//     console.log("Hello Typescript");
// }

// greet()

//Example 2 - Arrow function with prarameter and return type

// let add = (a:number,b:number):number=>{
//     return a+b
// }

// console.log(add(10,20));

//Example 3-Arrow function with implicit return
// let add = (a:number,b:number):number=>a+b;
// console.log(add(1,2));

//Example 4 - Arrow function with optional parameter

// let  displayDetails = (id:number,name:string,mailId?:string):void=>
// {
//     console.log("ID:",id);
//     console.log("Name:",name);
//     if(mailId !== undefined){
// console.log("Mail ID:",mailId);
//     }
// }

// displayDetails(123,"John","abc@example.com")
// displayDetails(12345,"Doe")

//Example 5 - Arrow function with a default parameters
// let calculateDiscount=(price:number , rate:number=0.50):void=>
// {
//     let discount:number = price * rate;
//     console.log("Discount Amount: ",discount);   
// }

// calculateDiscount(1000,0.30);
// calculateDiscount(1000)

//Example 6 - Arrow function as a rest parameter
let addNumber = (...nums:number[])=>
{
    let i;
    let sum:number=0

    for(i=0; i<nums.length; i++){
        sum = sum+nums[i]
    }
    console.log("sum of the numbers are: ",sum);
    
}

addNumber(10,20)
addNumber(1,2,3,4,5,6,7,8,9,10)


