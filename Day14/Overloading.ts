//Method overloading and constructor overloading in Typescript

class Calculator{
    constructor();//default constructor
    constructor(a:number,b:number);//parameterised constructor

    constructor(a?:number,b?:number){
        if(a!==undefined && b!==undefined){
            console.log("Sum of a & b is: ",(a+b))
        }
        else{
            console.log("Default constructor will be invoked.....")
        }
    }

    //Method overloading

add(a:number,b:number):number;
add(a:number,b:number,c:number):number;

add(a:number,b:number,c?:number):number{
    if(c!==undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}
}

// let c1 = new Calculator();
// let c2 = new Calculator(10,20)

let c1 = new Calculator();
console.log("Adding two numbers",c1.add(10,20));
console.log("Adding three numbers",c1.add(10,20,30));





