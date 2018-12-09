
var moment= require('moment');
var myBirthday=new Date(1995, 10, 17);

// number of milliseconds from 1-1-1970
var now =new Date();
console.log(now.getTime()); 
console.log(myBirthday.getTime()); 

var now=moment('2018-11-12 08:12');
console.log(now.fromNow());
console.log(now.format('YYYY:MM:DD'));







