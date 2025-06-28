/*data types are basically divided into two parts
 primitive and non-primitive 
 //call by valu & call by reference(non-primitive) 
 difference is based on how these data values are "stored in the mem
 and how we can access those values (two categorisation)"
*/
//primitive(call by value)
//7 types: String, Number, Boolean, null, undefined,Symbol,BigInt

//JS is Dynamically typed lang or statically ==> dynamically
//JS mei lang is not defined

//js ka bhai hai type script
// exclusively no variable is told that you are number ,bool , null
const score = 100;
const scoreValue = 100.3 //number

const isLoggedIn=false//boolean
const outsideTemp=null;//object
let userEmail;//undefined

const id = Symbol('123')//symbol
const anotherId = Symbol('123') // both have same value but the results are unique

//console.log(id == anotherId)

const bigNumber = 234383547558587669827163749n//bigint

//Non-Primitive(Reference)(call by reference) ==> type function
//Array, Objects, Functions
                 //   |_ Object function
const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name: "neharika",
    age: 22,
}
const myFunction = function(){//Object function
    console.log("Hello world");
}

console.log(typeof(anotherId))

// node 01_basics/datatypes-summary.js
/*
1:- Primitive Datatypes
  Number = number
       String  = string
           Boolean  = boolean
       null  = object
       undefined  = undefined
       Symbol  =  symbol
       BigInt  =  bigint

2 :-  Non-primitive Datatypes
    Arrays  =  object
       Function  = object function
       Object  =  object 
*/