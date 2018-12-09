var testDeferred=function(){
    var defer=$.Deferred();
    setTimeout(() => {
        console.log('1s');
        defer.resolve();
    }, 1000);
    setTimeout(() => {
        console.log('2s');
    }, 2000);
    return defer;
}

var resolve=function(){
    console.log('success');
}
var reject=function(){
    console.log('reject');
}
testDeferred().done(resolve);
reject();

// reject
// 1s
// success
// 2s

var promise1=function(flag){
    var promise=new Promise((resolve, reject)=>{
        if(flag === 0){
            reject('reject promise 1');
        }
        if(flag === 1){
            setTimeout(() => {
                resolve('resolve promise 1 leu leu');
            }, 1000);
        }
    })
    return promise;
}
var promise2=function(){
    var promise=new Promise((resolve, reject)=>{
        resolve('hihi resolve promise2 roi')
    })
    return promise;
}

async function run(){
    var p1 = await promise1(1);
    var p2 = await promise2(); 
    return [p1, p2]
}
run()
.then(values=>{
    console.log(values);
})
.catch(error=>{
    console.log(error);
})

// values = ["resolve promise 1 leu leu", "hihi resolve promise2 roi"]

Promise.all([
    promise1(0), // reject promise 1
    promise2()
]).then(function(values){
    console.log(values)
}).catch(error=>{
    console.log(error)
})
// reject promise 1, a promise reject will run catch


Promise.all([
    promise1(1), // resolve promise 1
    promise2()
]).then(function(values){
    console.log(values)
}).catch(error=>{
    console.log(error)
})
// all promise resolve, run then and return ordered value like ordered promise in promise.all
// values = ["resolve promise 1 leu leu", "hihi resolve promise2 roi"]

var leu=(data)=>{
    if(data){
        console.log(data)
    }else{
        console.log('there is no data')
    } 
}

promise1(1)
.then(leu) // for promise 1
.catch(leu) // for promise 1

.then(promise2) // if promise 1 resolve, run promise 2
.then(leu) // for promise 2
.catch(leu); // for promise 2

// resolve promise 1 leu leu
// hihi resolve promise2 roi

promise(1)
.then(res=>{
    leu(res);
    return promise2();
})
.then(leu);

// resolve promise 1 leu leu
// hihi resolve promise2 roi

promise1(0)
.then(leu)
.catch(leu);
// reject promise 1, run catch

var firstMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('first method completed');
      resolve({data: '123'});
    }, 2000);
  });
  return promise;
};


var secondMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(someStuff);
      resolve({newData: someStuff.data + ' some more data'});
      console.log(someStuff);
    }, 2000);
  });
  return promise;
};

var thirdMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('third method completed');
      resolve({result: someStuff.newData});
      console.log(someStuff);
    }, 3000);
  });
  return promise;
};

firstMethod().then(secondMethod).then(thirdMethod);

var timeoutId=setTimeout(() => {
    console.log('hihi')
}, 1000);
clearTimeout(timeoutId);

var count=0;
var intervalId=setInterval(() => {
    console.log('after 1s');
    // clearInterval(intervalId);
    count ++;
    console.log('count: ', count);
    if(count === 5){
        console.log('count = 5')
        clearInterval(intervalId);
    }
}, 1000);

var countFromTo=function(num1, num2){
    var promise= new Promise((resolve, reject)=>{

        num1=Number.parseInt(num1);
        num2=Number.parseInt(num2);

        if( !isNaN(num1) && !isNaN(num2)){

            if(num1 > num2){
                var tmp=num1;
                num1=num2;
                num2=tmp;
            }
            var intervalId = setInterval(() => {
                num1++;
                console.log(num1);
                if(num1===num2){
                    clearInterval(intervalId);
                    resolve('success count')
                }
            }, 1000);
        }else{
            reject("parameters are not number")
        }
    })
    return promise;
}
countFromTo(1, 2).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})