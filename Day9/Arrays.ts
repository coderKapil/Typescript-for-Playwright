//Approach 1 using literals

let names:string[]=[]//Declaration
names[0]="John"//Initiaslisation
names[1]="Smith"
names[2]="Peter"
names[3]="Scott"

// declaration +Initialisation together
// let names:string[]=["John","Smith","Peter","Scott"]

//Print the values inside arrays
// console.log(names);

//Approach 2 using generic Array<T> type
let empNames:Array<string>=["John","Smith","Peter","Scott"]
let empIds:Array<number>=[101,102,103,104]
// console.log(empNames);

// let data: Array<string | number> = ["John",101,"Smith",102,"Peter",103]
// console.log(data);
// console.log(data[1]);

let mixedData: Array<any> = [1,"John",true,null]

//Example 1: Iterating over an array using traditional for loop
// console.log("Employee Names..........");
// console.log("Size of an array: "+empNames.length);

// for(let i=0; i<empNames.length; i++){
//     console.log(empNames[i]);
    
// }

//Example2: Iterating using for in loop(indexes)
// console.log("Employee Names...........");
// for(let name in empNames){
//     console.log(empNames[name]);
// }

//Example 3: Iterating using the for of loop
// console.log("Mixed Data..........");

// for(let md of mixedData){
//   console.log(md);
// }

//Example 4: Passing an array to the function 
//Search an elemnt in an array using function
// function search(ele:number,arr:number[]):boolean{
//    for(let i=0; i<arr.length; i++){
//       if(ele == arr[i]){
//         return true//Element found
//       }
//    }
//    return false;
// }

// let nums:Array<number>=[10,20,30,40,50]

// console.log(search(40,nums));

//Example 5: A function takes an array and returns an array

function capitalizeWords(lower:string[]):string[]{
     let result:string[]=[]
    for(let i=0; i<lower.length; i++){
         result[i] = lower[i].toUpperCase()
    }
    return result;
}

let words:Array<string>=["johnny","pinky","pablo","bipul"]
console.log(capitalizeWords(words));

