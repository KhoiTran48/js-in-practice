console.log(a); // undefined - hoisting
console.log(b); // error b is not defined

var a=1; var a=5; // it's ok
let b=1; let b=5; // error b has already declared
const c=1; const c=2; // error c has already declared

var d; let e; // it's ok when assign to no value
const f; // error

// function scope
function funcScope(){
    var x=10;
    let y=5; 
    const z=4;
}
console.log(x); // error
console.log(y); // error
console.log(z); // error

// block scope if(){} for(){}
if(1){
    var x=1; 
    let y=2;
    const z=3;
}
console.log(x); // it's ok
console.log(y); // error
console.log(z); // error
