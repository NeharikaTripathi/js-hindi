// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2 != 1)

/*make sure when comparing the data type should be same 
as soon as the data type changes it is a problem*/
// console.log("2" > 1);
// console.log("02" > 1);

/*  The reason is tat an equality check == and comparison > < >= <= work differently
Comparison convert null to a number , treating it as 0.
That's why null >= 0 is true and null > 0 is false*/

//avoid these types of comparison
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// strict check ===
//value and datatype both are checked
console.log("2" === 2);


