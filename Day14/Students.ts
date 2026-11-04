//Class

class Student{
    readonly studentID:number//readonly 
    name:string//Regular property
    email?:string //optional property--> if you don't pass email the it is undefined
    static schoolName:string="GreenWood High"//Static variables shared among all instances

    //cONSTRUCTOR
    constructor(sid:number,sname:string,semail?:string){
        this.studentID=sid;
        this.name=sname
        this.email=semail
    }

    //Method

    displayInfo():void{
        console.log("StudentID: ",this.studentID);
        console.log("Student Name: ",this.name);
        if(this.email){
         console.log("Student Email: ",this.email);
        }
        else{
            console.log("Email is not provided");
        }
        console.log("School Name: ",Student.schoolName);//access static property using Student(class name)
        
    }

    static changeSchoolName(newName:string):void{
        Student.schoolName=newName;
    }
}

let s1 = new Student(1234,"John");
let s2 = new Student(101,"Smith","smith@example.com")
//Display student information
s1.displayInfo();
s2.displayInfo()

//Try to modify the student id of s1 object
// s1.studentID=111;//Cannot assign to 'studentID' because it is a read-only property.

//Changing school name
Student.changeSchoolName("Doon valley")
console.log("After chaning the school name");

s1.displayInfo()
s2.displayInfo()
