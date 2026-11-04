//Inheritance or method overrriding in TS

//Parent class
class Car{
    name:string
    color:string
    model:string

    constructor(name:string,color:string,model:string){
        this.name=name
        this.color=color
        this.model=model
    }

    start(){
        console.log("Car starts...");
        
    }

    stop(){
        console.log("Car stopped.....");
    }

    displayInformation(){
        console.log(`Name: ${this.name} Color: ${this.color} Model: ${this.model}`);
        
    }
}

//child class
class Honda extends Car{
    year:number

    constructor(name:string,color:string,model:string,year:number){
        //super will invoke the parent class constructor
        super(name,color,model)//this will take the values of name , color and model from parent class constructor
        this.year=year
    }

    //Method overriding
    start(){
        console.log("Honda started.....");
    }

    yom(){//year of manufacturing
        console.log(`Yom: ${this.year} Name: ${this.name} Color: ${this.color} Model: ${this.model}`);
    }
}

//Child class-Maruti
class Maruti extends Car{
    year:number;
      constructor(name:string,color:string,model:string,year:number){
        //super will invoke the parent class constructor
        super(name,color,model)//this will take the values of name , color and model from parent class constructor
        this.year=year
    }

    //Method overriding
    start(){
        console.log("Maruti started.....");
    }

    yom(){//year of manufacturing
        console.log(`Yom: ${this.year} Name: ${this.name} Color: ${this.color} Model: ${this.model}`);
    }
}

//Usage
//HONDA CLASS OBJECT
let honda = new Honda("Honda","Red","Honda City",2024);
console.log(honda.name);
console.log(honda.model);
console.log(honda.color);
console.log(honda.year);
honda.start()//called child class method(overrided method)
honda.displayInformation()//Name: Honda Color: Red Model: Honda City //parent class
honda.stop();//Car stopped..... //parent class

//Maruti class object
let maruti = new Maruti("Maruti","Blue","Suzuki",2021)
maruti.start()//child class method (overriden)
maruti.stop()//parent class
maruti.displayInformation()//parent class
maruti.yom()

//Parent class is holding child class object
let car:Car = new Honda("Honda","Red","Honda City",2024);
car.displayInformation()//parent class
car.start()//Honda started.....

// car.yom()//Not accessible yom() defined inside the child class but not in the parent class
