//Date --> calculated in millisecond from 1st jan 1970

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object

//let myCreatedDate = new Date(2025,0,23);//yyyy/m/dd
//0->Jan 11->decemeber
// let myCreatedDate = new Date(2025, 6, 3, 5, 3);
// console.log(myCreatedDate.toDateString());//Thu Jul 03 2025
// console.log(myCreatedDate.toLocaleString());//7/3/2025, 5:03:00 AM
let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//gives the timestamp
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1);

'${newDate.getDay()} and the time '
//costomize in localeString function
newDate.toLocaleString('default',{
    weekday: "long"
    
})







