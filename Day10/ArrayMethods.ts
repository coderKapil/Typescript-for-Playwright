//Array Methods
let numbers:number[]=[1,2,3,4,5]
let fruits:string[]=["apple","banana","orange","mango"]

// console.log(numbers);
// console.log(fruits);

//length-->this is not a method this is a attribute
// console.log(numbers.length);
// console.log(fruits.length);

//push()- Adds single/multiple elements to the end of the array

// numbers.push(6,7,8,9)
// console.log(numbers);

//pop()- removes the last element from an array
// let lastEle = numbers.pop();
// console.log("After pop: ",numbers);
// console.log("Removed element is: ",lastEle);

//shift()-removes the first element from an array and return that ele
// let firstNumber = numbers.shift();
// console.log(firstNumber);

//unshift()- add single/multiple element at the starting of an array
// let newLen = fruits.unshift("chiku","kiwi")
// console.log(fruits);
// console.log(newLen);

//concat()-combines two or more array together
// let resultantArr = numbers.concat([5,6],[8,9])
// console.log(resultantArr);

//slice()-extract some section of an array
// let res = fruits.slice(1,3);
// console.log(res);

//splice()-Adds / removes element from an array(everywhere)
// Array.splice(start,deletecount,item1----itemN)
console.log("Current elements in fruits array: ",fruits);

//EX1:only removing
let removedElements = fruits.splice(1,2)//here 1 is repesenting start idx and 2 is representing delete count
console.log("After splice(1,2): ",fruits);//[ 'banana', 'orange' ]
console.log("Removed Elements: ",removedElements);//[ 'banana', 'orange' ]

//Example 2: not removed just added
let addedElements = fruits.splice(1,0,"avacado","grapes","cherry")
console.log("After splice(1,0,\"avacado\",\"grapes\",\"cherry\")",fruits);

//Example 3:both removed and added

fruits.splice(1,2,"coconut","dragonfruit")
console.log("After splice(1,2,'coconut','dragonfruit')",fruits);

//8 indexOf()-Finds the index of an element if element not found then return -1
//Ex 1
fruits=[ 'apple', 'coconut', 'dragonfruit', 'cherry', 'mango','banana' ]
let bananaIdx = fruits.indexOf("banana");
console.log("Index of Banana",bananaIdx);

//Ex2
bananaIdx = fruits.indexOf("banana",2);
console.log(bananaIdx);

//includes()-checks if an element exist returns true/false
let isAppleExist = fruits.includes("apple")
console.log(isAppleExist);

//10 toString()- converts arrays to string
let numberString = numbers.toString()
console.log("Converted Arrays to string: ",numberString);

//Ex2
let myarray:string[] = ['w','e','l','c','o','m','e'];
console.log("Original Array",myarray);

let str:string = myarray.toString()
console.log("converted string",str);



















