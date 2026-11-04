//Objects in TS
//1. using 'Object' type - Directly define the values for variable
//The TS 'object' type represents all values that are not in primitive types

// let employee:object={
//     name:"John",
//     age:30,
//     salary: 50000,
//     job:"Engineer"
// }

let employee={
    name:"John",
    age:30,
    salary:50000,
    job:"Engineer",
    getDetails:function(){
        // console.log(this.name,this.age,this.salary,this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`
    }
}

//Accessign object using dot notation approach 1
// console.log( typeof employee);
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.salary);
// console.log(employee.job);
// // employee.getDetails()
// let empDetails = employee.getDetails()
// console.log(empDetails);

//Accessing objects using square bracket notation approach 2
// console.log(employee["name"],employee["age"],employee["job"],employee["salary"]);
// console.log(employee["getDetails"]());

// //Modify the value
// employee.job="Manager"//employee["job"]="Manager"
// console.log(employee.job);

//=====================================================================================================================================
//2)Inline type object - we also define the data types of keys (TS)
let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
}=
{
    name:"Scott",
    age:15,
    grade:"A",
    getSummary:function(){
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`
    }
}

//approach 1
// console.log(student.name,student.age,student.grade);
// console.log(student.getSummary());
// //approach 2
// console.log(student["name"],student["age"],student["grade"]);
// console.log(student["getSummary"]());

//3) using type aliases (TS): allows creating a new name for a existing type

type Product={
    name:string,
    price:number,
    getInfo:()=>string
}

let book1:Product={
   name:"Learn Java",
   price:300,
   getInfo:function(){
    return `${this.name} costs ${this.price}`
   }
}

let book2:Product={
   name:"Learn Python",
   price:500,
   getInfo:function(){
    return `${this.name} costs ${this.price}`
   }
}

let book3:Product={
   name:"Learn Javascript",
   price:800,
   getInfo:function(){
    return `${this.name} costs ${this.price}`
   }
}

console.log(book1.name,book1.price);
console.log(book2.name,book2.price);
console.log(book3.name,book3.price);
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());

//Ex2: Intersection types
type Personal={
    name:string,
    age:number
}

type Contact={
    email:string
    phone:number
}

type Candidate=Personal & Contact &
{
    getContactInfo:()=>string
}

let candidate:Candidate={
    name:"Yung",
    age:25,
    email:"yung@dsa.com",
    phone:123456789,
    getContactInfo:function(){
        return `${this.name} is ${this.age} years old having ${this.email} and ${this.phone} email and phone number`
    }
}

console.log(candidate.getContactInfo());

//============================================================================================================================
//4. using the class

class Person{
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }

    getDetails():string{
        return `SSN: ${this.ssn} Name: ${this.getFullName()}`
    }

}

//How to create object from a class
let person1 = new Person('123456','John','Kenedy')
let person2 = new Person('32123','Scott','Doe')
let person3 = new Person('432123','Roland','James')
console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person3.getDetails());















