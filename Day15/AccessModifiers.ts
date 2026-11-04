//Access modifiers in TS

class Person{

    public name:string;
    protected age:number
    private ssn:number

    constructor(name:string, age:number, ssn:number){
       this.name = name;
       this.age = age;
       this.ssn = ssn
    }

    displayInfo(){
        console.log("Name:",this.name)
        console.log("Age:",this.age)
        console.log("SSN:",this.ssn)
    }
}

//Child class
class Employee extends Person{
    private employeeID:number;

    constructor(name:string,age:number,ssn:number,employeeID:number){
        super(name,age,ssn);
        this.employeeID = employeeID;
    }

    showEmployeeDetails(){
        console.log("Name:",this.name)//accessible-public
        console.log("Age:",this.age)//accessible-protected
        // console.log("SSN:",this.ssn)//not accessible-Error private property
        console.log("EmployeeID:",this.employeeID)//accessible-private accessible within the class
    }
}

let emp = new Employee("John",24,123456,101)
emp.displayInfo()
emp.showEmployeeDetails()
console.log(emp.name);//accessible
// console.log(emp.age);//not accessible because outside subclass
// console.log(emp.ssn);//not accessible because outside the class

