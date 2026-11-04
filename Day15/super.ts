//Super keyword usage
class Parent{
    num:number=10;

    constructor(){
        console.log("This is a Parent class constructor.....");
    }

    display(){
        console.log("This is display() method from Parent class.")
    }
}

class Child extends Parent{
    num:number=15;//overriden

    constructor(){
        super();//This will call parent class constructor(must be called)
        console.log("This is a Child class constructor.....");
    }

    show(){
        // console.log(super.num);//parent num //TS doesn't support super.num to access parent class properties directly like Java does.
        // console.log(this.num);
        console.log("This is show() method from the child class.....")
    }

    //overiden
    display(){
        console.log("This is display() method from the child class...")
        super.display()//this will invoke the parent class method
    }

}

//usage
let c1 = new Child()
c1.show()//child class
c1.display()
console.log(c1.num);
