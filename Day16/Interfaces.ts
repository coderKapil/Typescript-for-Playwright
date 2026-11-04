// //Interfaces in TS
// //Example 1: Basic Intterface
// interface Person{
//     name:string
//     age:number
// }

// let student:Person={
//     name:"John",
//     age:24
// }

// //accessing
// console.log(student.name);
// console.log(student.age);
// console.log(student);//{ name: 'John', age: 24 }

// //Example 2: optional properties(?)
// interface Employee{
//     eid:number
//     ename:string
//     eDepartment?:string
// }

// let emp:Employee={
//     eid:101,
//     ename:"Johnny"
// }

// let emp1:Employee={
//     eid:102,
//     ename:"Smith",
//     eDepartment:"QA"
// }

// console.log(emp.eid,emp.ename,emp.eDepartment);//101 Johnny undefined--because we have not defined any value for department
// console.log(emp1.eid,emp1.ename,emp1.eDepartment);

// //Example 3: Readonly properties

// interface Book{
//     title:string
//     readonly isbn:string
    
//     display():void//abstract method
// }

// let b1:Book={
//     title:"Learn Playwright",
//     isbn:"123-ABC",

//     display(){
//         console.log(b1.title,b1.isbn);
//     }
// }

// console.log(b1.title)//Learn Playwright
// console.log(b1.isbn)//123-ABC
// b1.display();//Learn Playwright 123-ABC

// console.log("After changing values.....")

// b1.title="Learn Selenium"
// console.log("After changing title: ",b1.title);//Learn Selenium

// // b1.isbn="123-BCDA"//Error Cannot assign to 'isbn' because it is a read-only property.

// //Example 4: Extending interfaces(inheritance is applicable)
// //Parent interface
// interface Animal{
//     name:string
// }

// //Child interface
// interface Dog extends Animal{
//     color:string
// }

// let myDog:Dog = {
//     name:"Buddy",
//     color:"Black"
// }

// console.log(myDog.name,myDog.color);

//Example 5:

interface Animal{
    name:string
    sound():void
}

class Dog implements Animal{
    name:string//inherited from Animal interface
    color:string//Dog class property
    constructor(name:string,color:string){
        this.name=name;
        this.color=color
    }

    sound(){
        console.log("bark.....")
    }
}

let pet = new Dog("Tommy","Black")
console.log(pet.name);
console.log(pet.color);
pet.sound()






