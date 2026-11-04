//Advance array methods
//forEach(),map(),filter(),reduce(),every(),some()

//Ex1: Get index of all the fruits along with the values
// let fruits:string[]=["apple","banana","orange","mango","kiwi"]
// console.log("Printing fruits along with index using for loop......");

// for(let i in fruits){
//     console.log(i,fruits[i]);
// }

//using forEach loop
// fruits.forEach(function(element,index){
//     console.log(`${index}`,`${element}`);
    
// })

//forEach with arrow function
// fruits.forEach((element,index)=>{
//     console.log(`${index}`,`${element}`);
    
// })

//Ex2: convert each fruits name to uppercase character
// fruits.forEach((element)=>{
//     console.log(element.toUpperCase());
    
// })

//map()
//Ex1-Get squares of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]
// let num:number[]=[1,2,3]
//   let squaredNumbers =num.map((ele)=>ele * ele)
// console.log("Original Array: ",num);

// console.log("Square number array: ",squaredNumbers);

// //Ex2 - Double the each number present in the array [1,2,3,4] --> [2,4,6,8]
let arr:number[]=[1,2,3,4,5]
// //if you are having a single return statement inside the arrow function then {} and return statements are optional
// let doubleNumber = arr.map((ele)=>ele * 2)
// console.log("Original array: ",arr);
// console.log("Array after double: ",doubleNumber);

//3 filter()
//Ex1: Get the only even number from an array

// let evenNumb = arr.filter((ele)=>(ele % 2 == 0))

// console.log("Even number: ",evenNumb);

//Ex2: Filter numbers from an array that are greater than 3
let num:number[]=[1,2,3,4,5,6,7,8]
// let gtThanThree = num.filter((ele)=> ele>3)

// console.log("Numbers greatr than 3 are: ",gtThanThree);

//reduce()
//Ex1: Get the total sum of all elements in an array
// let sum=0;
// for(let ele in arr){
//     sum = sum + arr[ele]
// }

// console.log("total sum of all elements are: ",sum);

//using reduce
// let resultSum = arr.reduce((sum,ele)=>sum = sum+ele,0)//here 0 is the initial value of sum

// console.log("Sum of all ele of array are: ",resultSum);

//5 some()
//Ex1: check array contains negative numbers or not
// let hasNegative = num.some((ele)=>ele<0)
// console.log(hasNegative);

// //Ex2: check array contains positive numbers or not
// let hasPositive = num.some((ele)=>ele>0)
// console.log(hasPositive);

//5 every()
//Ex1: checks all numbers of array are even or not
// let allEven = num.every((ele)=>ele%2==0)
// console.log("Even Number: ",allEven);

//Ex2: all numbers should be greater than or equal to one
let allGreaterThanOne = num.every((ele)=>ele>=1)
console.log(allGreaterThanOne);

//Ex3: all numbers are positive or not
let allPositive = num.every((ele)=>ele>0)
console.log("Are all numbers positive ?",allPositive);






