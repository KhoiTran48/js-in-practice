function greeting(gender){
    console.log(`Hi ${this.name}. I am ${this.age} and ${gender}`);
}
greeting.call(null, 'male');

// Hi undefined. I am undefined and male

var cat={
    name: 'Tome',
    age: 100
}
greeting.call(cat, 'female');

// Hi Tome. I am 100 and female

var xxx='yyy';
var obj={
    xxx:xxx,
    [xxx]:xxx,
    run(){
        console.log('enhanced object literal')
    }
} 
class Mouse{
    constructor(name){
        this.name=name;
    }
    run(){
        console.log(this.name);
    }
}

var mickey= new Mouse('mickey');
mickey.run();