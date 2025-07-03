//array
//js arrays are resizable ,conatain mix of datatypes
//zero based indexing
//copies are shallow copies
//shallow copy -->share th same reference point 
        //changes will be shown in original place also 
//deep copy -->dont share th same reference points 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros =["doraemon","nobita","ninja hathodi","bheem"]
const Arr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.pop()//removes the last element

// //myArr.unshift(9);//adds 9 at the starting of the array
// myArr.shift()//removes the first element of the array

// console.log(myArr.includes(9));//returns true(if exists) else false -->type:bool
// console.log(myArr.indexOf(3));//returs index of the element in the array

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice , splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3);//does not change the original array
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3);//changes the original array 
console.log(myn2);
console.log("C",myArr);

