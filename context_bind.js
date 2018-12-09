function Mouse(){
    this.name='mickey';
    this.sayHi= function(){
        console.log('My name is '+this.name);
    }
}
this.name="khoi";
var mickey= new Mouse();
// mickey.sayHi(); // My name is mickey

var hiNotBind =mickey.sayHi;

hiNotBind(); // My name is khoi

var hiBind =mickey.sayHi.bind(mickey);

hiBind(); // My name is mickey

var obj={
    name:'AAA',
    run:function(){
        var that= this;
        var run2= ()=>{
            console.log(this)
            console.log(this.name);
        };
        run2();
    }
}
obj.run();