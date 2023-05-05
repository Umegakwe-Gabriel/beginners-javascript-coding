
// String Datatype
let a = "This is my career. I'm in town."
let b = a.length
let c =a.indexOf("i")
let d =a.includes(`This`)
// console.log(d)

let bb= [`I am a boy`,`I belong to Jesus`, 33, 5, 5,{name: `Toochukwu`}]
// console.log(bb.forEach((el)=>{return console.log(el);}),);
let pot = [
 itemA = { name: "Bag", cost: 500 },
 itemB = { name: "Shoe", cost: 7500 },
 itemC = { name: "Neck Chain", cost: 700 },
 itemD = { name: "cap", cost: 500 },
];
// console.log("old Cart", cart);
// cart.push(itemA);
// cart.push(itemB);
// cart.push(itemC);
// cart.push(itemD);
// // console.log(cart)
// let da = cart.forEach((el) => {
//     return el.cost;
//   });
  // console.log(da.reduce((y,z)=> {return y+z;}));
  // let ff = da.reduce((y,z)=> {return y+z;})
// console.log(ff)

// let newVal =(ff*0.2).toString();
// // console.log(newVal)
// let convertArr = newVal.split("");
// // console.log(convertArr)
// let spliceArr = convertArr.splice(1,0,",");
// // console.log(spliceArr)
// let symbol = convertArr.unshift("₦");
// // console.log(symbol)
// let joined = convertArr.join("");
// // console.log(joined);
// // console.log(`Your total purchase is ${joined} `);


// let arr2 = [50, 100, `Learning is fun`]
// let arr3 = [40, 400]
// let arr4 =pot.map((za)=>{return (za.cost);});
// console.log(arr4)
// let add = arr4.reduce((a,b)=> {return (a+b)});
// console.log(add)
// let string = add.toString();
// console.log(string)
// let comma = string.split("");
// console.log(comma)
// let splicerr = comma.splice(1, 0, `,`);
// console.log(splicerr)
// let naira = comma.unshift(`₦`);
// console.log(naira)
// let joined = naira.join("");
// console.log(joined);

// console.log(`Your total purchase is ${joined} `);

// // let joined = naira.join(``);
// console.log(joined)
// console.log(``)
// console.log(arr2.concat(`Emeka visited the gallery`))

let arr1 = [1, 2, 500, 1000, ]
// let samp = arr1.sort((a, b) => {
//   return a - b;
// });
// let val = samp.length - 1;
// console.log(samp);
// console.log(val);
// console.log("Our final result is: ", samp[val]);
let xx = [...arr1, 40];

// console.log(Math.max(2, 5, 1, 9));
// console.log(Math.max(...arr1));

// console.log(
//     arr1.reduce((a, b) => {
//       return Math.min(a, b);
//     }, Infinity),
//   );


console.log(
  arr1.reduce((a, b) => {
    return a < b ? a : b;
}),
);


  










// User Input
