const name ="Neharika"
const repoCount = 50

//console.log(name + repoCount+" Value");//avoid
//String interpolation
//Place Holder
console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

//declare string
const gamename = new String('neharika-tri-pa-thi');// pate this in inspect and read about all methods

// console.log(gamename[0]);//n
// console.log(gamename.__proto__);//double underscore // object

// console.log(gamename.length);//8
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('n'));

// const newString = gamename.substring(0,4);//4 not included
//can't give negative values above

// console.log(newString);//neha
const anotherString = gamename.slice(-7,4)
console.log(anotherString);

const newStringOne = "  neharika. "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the extra space

const url = "http://neharika.com/neharika%22tripathi"
                                //neharika tripathi
console.log(url.replace('%22' , '-'))

console.log(url.includes('neharika'));//true
console.log(url.includes('bingo'));//false

//change the string to array
console.log(gamename.split('-'));


