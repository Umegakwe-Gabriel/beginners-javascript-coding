let a = [1, 3, 45, "This is it, we are here", { name: "Peter"}, [2,8]];

let bb = "This is it,we are here";

// console.log(a.length);
// console.log(a.slice(0,3));
// console.log(a.splice(3,5));

// Splice can also replace but you must indicate what must be replaced.
// splice removes values from the array from the starting selected to the ending selected by you. 
// Splice mutates the original array by removing the already indicated path you indicated

// Slice removes likes splice but it -1 from the exclusive path for example if we have(4, 8), in slice there is -1 from the 8
// console.log(a)
// Shift returns the first value of the Array, but it does not mutates the Array
// Unshift adds value to the first part of the Array. It returns the length of the array and adds the new value to the beginning of the array.
// Reverse reverses the first and the last Array
let c = [ 1, 2, 3, 4, 5, "This is me"];
// console.log(c.concat(a));
// console.log(c.pop(5));
// console.log(c);
// console.log(c.join(""))
// console.log(c.shift());
// console.log(c. unshift("Hello"));
// console.log(c[5]).charAt(3);
let name = "Peter"
// retep
let convert =  name.toLowerCase();
let arr = convert.split("");
let reverse = arr.reverse();
let join = reverse.join("");
// console.log(join)
// Flat converts any dimension of array to one dimensional array
let d = ["This is Nigeria",1,2,3,"Nigeria is my country"];
// console.log(d.length);
// console.log(d.slice(0,3));
let e =["This is Nigeria",1,2,3,"Nigeria is my country", [ 5, 6, 7, ["God is my strength"]]];
// console.log(e.flat(2));
// console.log(e.sort((a, b) => { return a - b;}));
// console.log(e.map((props)=> {return props;}),);
let cart= [
 {name: "Bag", cost: 500 },
{name: "Shoe", cost: 7500 },
{name: "Neck Chain", cost: 700 },
{ name: "Watch", cost: 3000 },
]
let dd=cart.map((el) =>{
    return el.cost;
});

let ff=dd.reduce((a, b) => {
    return a+b;
});

// console.log("Your purchase is:",
// ff);

// let total = 0;
// cart.forEach(item =>{
//     total+= item.cost;
// });
// console.log("TOTAL: ", total );
let newVal = (ff * 0.2).toString();
let convertArr = newVal.split("");
let spliceArr = convertArr.splice(1,0,",");
let symbol = convertArr.unshift("₦");
let joined = convertArr.join("");
// console.log(joined);

// console.log(`Your total purchase is ${joined}
// `);

// let myArr = [1, 6, 3, 9, 0, 20, 15];
let myA = [1]
// console.log(
//     myArr.filter((el)=> {
//         return el  > 3;
//     }),
// );

// let count = 0;
// count = +1
// console.log(count)

// if (true) {
//     console.log("statement");
// } else{
//     console.log("statement");
// }

let count = 0;
myArr.forEach((el) => {
    console.log(el);
    count++;
    console.log(`I just ran $(count)
    times`);
});
console.log(`This is my total RUN:`, count);

let myArr = [1, 6, 3, 9, 0, 20, 15, 200, 300];
let samp = myArr.sort((a, b))


let xx = [...myArr];
// console.log(Math.min(...myArr));

// true ?
// console.log(
//     myArr.reduce(())
// )










