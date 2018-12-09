function Mouse(color, name){
    this.name=name;
    this.color=color;
    this.sleepConstructor=function(){
        console.log(this.name + ' is sleeping ...');
    }
}
Mouse.prototype.sleepPrototype= function(){
    console.log(this.name + ' is sleeping ...');
}
var jerry= new Mouse('orange', 'jerry');
var mickey= new Mouse('red', 'mickey');

if(jerry.sleepConstructor === mickey.sleepConstructor){
    console.log('function be created in constructor is equally')
}else{
    console.log('function be created in constructor is different')
}

if(jerry.sleepPrototype === mickey.sleepPrototype){
    console.log('function be created in constructor is equally')
}else{
    console.log('function be created in constructor is different')
}

console.log(Mouse.prototype.constructor === Mouse);