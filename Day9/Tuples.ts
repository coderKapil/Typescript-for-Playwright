//Tuples in TS

//Example 1: Tuple with 2 values one is string and one is number

// let person: [string,number]=["John",101]
// console.log(person[0]);
// console.log(person[1]);

// console.log(person);

//Example 2: Tuple with multiple values

let user:[number,string,boolean,number,string]=[10,"John",true,101,"welcome"]
// console.log(user);

//Example 3: Iterating over a tuple using traditional for loop
// for(let i=0; i<user.length; i++){
//     console.log(user[i]);
    
// }

//Example 4: Iterating using a for in loop (index based)
// console.log("using for in loop..........");

// for(let i in user){
//     console.log(user[i]);
// }

//Example 5: using for of loop
// console.log("using for of loop..........");

// for(let i of user){
//     console.log(i);
// }

//Example 6: Tuple Array (Array of tuples)

let students:[number,string][]=[[101,"John"],[102,"Peter"],[103,"Scott"]]
console.log(students.length);//length of tuple array

// console.log(students[0]);//extracting speciifc tuple from an array of tuple
let tp = students[0]
console.log(tp[0]);//extracting speicifc value from a speciifc tuple
console.log(tp[1]);







