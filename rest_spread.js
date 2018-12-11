var sum=(...nums)=>{
    return nums.reduce((a,b)=>{
        return a+b;
    },0)
}

console.log(sum(1, 2, 3, 4)); 
// 10
// nums= [1, 2, 3, 4]

var sum=(initNums, ...nums)=>{
    return nums.reduce((a,b)=>{
        return a+b;
    },initNums)
}

console.log(sum(10, 2, 3, 4)) 
// 19
// nums=[2, 3, 4]

var concat=(seperator, ...strs)=>{
    return strs.join(seperator)
}

console.log(concat('.', 'a', 'b', 'c')); 
// a.b.c
// strs = ['a', 'b', 'c']

var a=[1, 2, 3];

var b=[4, ...a, 5];
console.log(b);
// [4, 1, 2, 3, 5]

var obj1={
    a:1,
    b:2,
    c:3,
    d:{
        e:4
    }
}
obj2={
    ...obj1
}
// tương đương
for( let key in obj1){
    obj2[key]=obj1[key];
    // chỉ clone cấp 1
    // nên cấp 2 của object k được clone và vẫn trỏ tới cùng vùng nhớ
}

obj1 === obj2;
// false;

obj1.d === obj2.d;
// true
// ...obj1, chỉ clone được 1 cấp thôi, từ cấp 2 vẫn trỏ tới cùng giá trị
