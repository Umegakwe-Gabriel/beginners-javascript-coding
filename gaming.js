// const myMoney = (value) => {
//   let data = value.toString();

//   if (data.length <= 3) {
//     let res = data.split("");
//     res.unshift("₦");
//     res.push(".00");
//     return res.join("");
//   } else if (data.length === 4) {
//     let res = data.split("");
//     res.splice(1, 0, ",");
//     res.unshift("₦");
//     res.push(".00");
//     return res.join("");
//   }  else if (data.length === 5) {
//     let res = data.split("");
//     res.splice(2, 1, ",");
//     res.unshift("₦");
//     res.push(".00");
//     return res.join("");
//   }else {
//     return "This is wrong";
//   }
// };

// console.log(myMoney(5240));

// const famMoney = ( money)=>{
//     let data= money.toString();
   
//     if ( data.length<=3){
//         let solve=data.split("");
//         solve.unshift("₦");
//         solve.push(".00");
//         return solve.join("");
//     } else if ( data.length===4){
//         let solve=data.split("");
//         solve.splice(1, 0, ",");
//         solve.unshift("₦");
//         solve.push(".00");        
//         return solve.join("");
//     } else if ( data.length===5){
//         let solve=data.split("");
//         solve.splice(2, 1, ",");
//         solve.unshift("₦");
//         solve.push(".00");
//         return solve.join("");
//     } else if ( data.length===6){
//         let solve=data.split("");
//         solve.splice(3, 2, ",");
//         solve.unshift("₦");
//         solve.push(".00");
//         return solve.join("");
//     }else{
//         console.log("NaN")
//     }
// }
// console.log(famMoney(3200));

// const value = (a, b) => { 
//   console.log(arguments);
// };

// console.log(value(1, 6));

// value(2, 5, 6, 8, 90, 2);

// let myValue = (x, y) => {
//     console.log("This is it: ", arguments.length);
  
//     return x * y;
//   };
  
//   console.log(myValue(5, 9, 8, 0, 9, 6));
//   const prompt = require("prompt-sync")();
  
//   let aa = prompt("Enter a value: ");
//   console.log(`Your entered value is ${aa}`);
  
  // let comp = 12;
  // let guess = parseInt(prompt("Guess my Mind: "));
  // // let guess = parseInt(myGuess);
  // if (comp === guess) {
  //   console.log("Guess: ", guess, "comp: ", comp);
  //   console.log("You Won!");
  // } else {
  //   console.log("Guess: ", guess, "comp: ", comp);
  //   console.log("You Lost");
  // }
  
  // let guess = parseInt(prompt("Guess my Mind: "));
  
  // let xx = prompt("Guess my First Number: ");
  // let yy = prompt("Guess my Second Number: ");
  
  // let x1 = parseInt(xx);
  // let y1 = parseInt(yy);
  
  // console.log(x1 + y1);
  
  // let guess = prompt("Guess my Mind: ");
  
  // if (isNaN(guess)) {
  //   console.log("This can't be");
  // } else {
  //   let newGuess = parseInt(guess);
  //   console.log(newGuess);
  // }
  
  // let x1 = prompt("Enter X1: ");
  // let x2 = prompt("Enter X2: ");
  
  // if (isNaN(x1) && isNaN(x2)) {
  //   console.log("Please put in a valid Number");
  // } else {
  //   let xx1 = parseInt(x1);
  //   let xx2 = parseInt(x2);
  
  //   console.log(xx1 + xx2);
  // }
  
  // let randomNumb = Math.floor(Math.random() * 5);
  // console.log(randomNumb);
  // let userEntry = prompt("Take a Guess: ");
  
  // if (isNaN(userEntry)) {
  //   console.log("e no fit work...!");
  // } else {
  //   let entry = parseInt(userEntry);
  //   if (randomNumb !== entry) {
  //     console.log("You lost!");
  //   } else {
  //     console.log("You win!");
  //   }
  // }
  // let randomNumb = Math.floor(Math.random() * 5);
  // while (true) {
  //   // console.log(randomNumb);
  //   let userEntry = prompt("Take a Guess or Press 'r' to Exit: ");
  
  //   if (isNaN(userEntry)) {
  //     if (userEntry === "r") {
  //       console.log("i know say u go come back...!");
  //       break;
  //     } else {
  //       console.log("e no fit work...!");
  //     }
  //   } else {
  //     let entry = parseInt(userEntry);
  //     if (randomNumb !== entry) {
  //       console.log("You lost!");
  //     } else {
  //       console.log("You win!");
  //       break;
  //     }
  //   }
  // }
  
  // let count = 0;
  
  // while (count <= 10) {
  //   count++;
  //   if (count === 4) {
  //     console.log("This is it: ", count);
  //     break;
  //   } else {
  //     console.log(count);
  //   }
  // }
  
  
//   let record = [{}, {}, {}, {}]
  
//   let student = {name: "", date: "", time: ""}
  
//   record.push(student)
  
//   myRecord("travis")
// First assignment: On water game.
// const prompt = require("prompt-sync")();
// let water= 0;
// let drinkWater=parseInt(water)

while(true){
  let waterLevel=(prompt(" Enter a litre or press Q to exist"))
  if (isNaN(waterLevel)) {
    if (waterLevel =="q"){
     console.log("Thanks for the Patronage")
     break; 
    }else{
      console.log("Incorrect input")
    }
  }else{
    let waterSystem=parseInt(waterLevel)
    drinkWater=drinkWater+waterSystem
    console.log(`water level: ${drinkWater/100}L`);
    if(drinkWater<=100 && drinkWater===100){
      console.log("You No Try");
    }else if(drinkWater<=200 && drinkWater===200){
      console.log("You can do better");
    }else if(drinkWater<=300 && drinkWater===300){
      console.log("Keep it Up");
    }else if(drinkWater<=400 && drinkWater===400){
      console.log("Hmmm...One more step to be Good");
    }else if(drinkWater<=500 && drinkWater===500){
      console.log("Wow!!!...Excellent");
    }else {
      console.log("Excessive water is bad for the Body")
    }
  }
}