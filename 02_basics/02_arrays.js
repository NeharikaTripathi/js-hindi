const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //["thor","Ironman","spiderman",["superman","flash","batman"]]
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros)
// console.log(allHeroes);//["thor","Ironman","spiderman","superman","flash","batman"] 
//make sure to store in constant as output is new array

//spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

//data scrapping
//check
console.log(Array.isArray("Neharika"))
//convert
console.log(Array.from("Neharika"))
//here we will have to clearly mention which one to convert the 
//key or the value
console.log(Array.from({name:"Neharika"}))//interesting
let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

