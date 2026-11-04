//Function 
//Example 1: Named functions with no parameters and no return type

// function display():void{
//     console.log("Welcome to the typescript");
    
// }

// display();//calling function

//Example2: Named function with parameters and return type

// function addNumbers(x:number, y:number):number{
//     return x+y;
// }

// let res:number = addNumbers(10,20);
// console.log(res);

// console.log(addNumbers(10,20));
// console.log(addNumbers(10,20,30));//compiler error: Expected 2 argument but got 3 
// console.log(addNumbers(10));//compiler error: Expected 2 argument but got 3

//Example3: Named function with rest parameters

// function addNumber(...nums:number[]){
//     let i;
//     let sum:number=0

//     for(i=0; i<nums.length; i++){
//         sum = sum+nums[i]
//     }
//     console.log("sum of the numbers are: ",sum);
    
// }

// addNumber(10,20)
// addNumber(1,2,3,4,5,6,7,8,9,10)

//Example 4: Named function with rest parameters - multiple types
// function findElements(...elements:(number | string)[]):number{
//     return elements.length
// }

// console.log(findElements(11,"John","doe",1,2,3,4,5));

//Example 5 - Named function with optional parameters

// function displayDetails(id:number,name:string,mailId?:string):void{

//     console.log("ID:",id);
//     console.log("Name:",name);
//     if(mailId !== undefined){
// console.log("Mail ID:",mailId);
//     }
// }

// // displayDetails(123,"John","abc@example.com")
// displayDetails(123,"John")

//Example 6 - Named function with default parameters

// function calculateDiscount(price:number , rate:number=0.50):void{
//     let discount:number = price * rate;
//     console.log("Discount Amount: ",discount);
    
// }

// calculateDiscount(1000,0.30);
calculateDiscount(1000)




