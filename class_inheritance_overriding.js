class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating ....`);
    }
}
class Bird extends Animal{
    fly(){
        console.log(`${this.name} is flying ...`)
    }
}
class Parrot extends Bird{
    fly(){
        console.log(`${this.name} is flying on the top 1km ...`)
    }
    speak(){
        console.log(`${this.name} is speaking ...`)
    }
}

var parrotAdult= new Parrot('Honey');
    parrotAdult.eat();
    parrotAdult.fly();
    parrotAdult.speak();
    
var cock = new Bird('Cucu');
cock.fly();