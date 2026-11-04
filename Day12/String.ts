//Declaration of string in TS
// let str1:string = 'This is a string with single quote'
// let str2:string = "This is a string with double quote"
// let str3:string = `This is a string with Back Ticks`

// console.log(str1,str2,str3);

// //when to use back tick
// let num:number=10;
// // console.log("Number is: ",num);//10
// console.log(`Number is ${num}`);

//String methods
// 1)length-find the length of the string
let str:string = "Hello, Typescript!"
console.log("Length of the string:",str.length);//18

//2 toUpperCase() and toLowerCase()
console.log("Upper Case: ",str.toUpperCase());
console.log("Lower Case: ",str.toLowerCase());

//3. charAt(index) and indexOf(string)
console.log("Character at 4th index: ",str.charAt(4));//o
console.log("Index of Type: ",str.indexOf("Type"));//7

//4. substring()
console.log(str.substring(0,5));

//5. includes()-returns true or false
console.log(str.includes("abc"));//false
console.log(str.includes("Type"));//true

//6. startsWith() and endsWith()-->returns boolean value true/false
console.log(str.startsWith("H"));
console.log(str.endsWith("ript!"));

//7. replace()
console.log("Replaced String: ",str.replace("Typescript","World"));

//8. split() - Breaks the string into multiple parts based on delimeter and returns a new array

//Ex1 
let words:string[]=str.split(" ")
console.log("After splitting string: ",words);// [ 'Hello,', 'Typescript!' ]

//Ex2
let mystring:string = "abc@example.com,xyzabc"
let arr = mystring.split(',')
console.log("Email: ",arr[0]);
console.log("password: ",arr[1]);


//9. trim(),trimStart(),trimEnd()
mystring = "      welcome to typescript     "
console.log("Original String: ",mystring);

console.log("trim:",mystring.trim());
console.log("trimStart:",mystring.trimStart());
console.log("trimEnd:",mystring.trimEnd());

//10. concat()
let str1 = "welcome "
let str2= "to typescript"

console.log("After concatenation: ",str1.concat(str2));
console.log("After concatenation: ",str1+str2);//this is alternative but not recommended;

//concept of string immutability (immutable--cannot change the original value)
// let num=10;
// let res = num+5;
// console.log(res);//15
// console.log(num);//10

str1="welcome"
let modifiedString = str1.concat("to typescript")
console.log(str1);//welcome

//Multiline string
// let multiLine:string = "welcome
                        //  to typescript
let multiLine:string = `welcome
                         to typescript`
 console.log(multiLine);
                         





















