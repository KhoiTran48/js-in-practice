var a=1;
var b=1;
console.log( a===b);
// true
// vì 1 cần vùng nhớ nhỏ để lưu
// nên biến a, b có thể lưu giá trị trong ô nhớ của a, b 
// nên khi so sánh 2 ô nhớ a,b bằng nhau
// => value types

var obj1={a:1};
var obj2={a:1};
console.log( obj1 === obj2);
// false

// cần vùng nhớ lớn để lưu object
// do đó object được lưu ở vùng nhớ không phải của biến obj1, obj2
// vùng nhớ biến obj1, obj2 chỉ lưu địa chỉ vùng nhớ chứa object
// nên so sánh 2 ô nhớ obj1, obj2 khác nhau
// => reference types

// obj1, obj2 chỉ lưu số nhà thôi

var c=b;
c=10;
console.log(b);
// still 1

var obj3=obj2;
obj3.a=10;
console.log(obj2);
// {a:10}
// obj3= obj2, thực chất là gán vùng nhớ của obj3 bằng địa chỉ lưu object của obj2
// do đó khi đổi giá trị object thì obj2 cũng thay đổi

// obj3 chỉ lấy số nhà của obj2 và thay đổi cấu trúc nhà đó
// nên nhà mà obj2 trỏ đến cũng thay đổi vì cùng một nhà

// nguy hiểm khi truyền object vào function
obj4={a: 1};

function changeObj( obj){
    obj.a=100;
}
changeObj(obj4);

console.log(obj4);
// {a:100} oh nooo............

var d=1;
function changeInput(d){
    d=10;
}
console.log(d);
// 1, vì var có function scope

