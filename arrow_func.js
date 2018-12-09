function sum(a, b){
    return a+b;
}
var sum1=function(a, b){
    return a+b;
}
var sum2 = (a, b)=>{
    return a+b;
}
var sum3 = a => a*a;

var obj={
    name:'AAA',
    run:function(){
        var run2= function(){
            console.log(this.name);
        }
        run2(); // global context
        run2.bind(obj)(); // obj context -> AAA
    }
}
obj.run();

var obj={
    name:'AAA',
    run:function(){
        var that= this;
        var run2= function(){
            console.log(that.name);
        }
        run2(); // global context
    }
}
obj.run();

var obj={
    name:'AAA',
    run:function(){
        var run2= function(){
            console.log(this.name);
        }.bind(this);
        run2();
    }
}
obj.run();

var obj={
    name:'AAA',
    run:function(){
        var run2= ()=>{
            console.log(this.name);
        };
        run2();
    }
}
obj.run();