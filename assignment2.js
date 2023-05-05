// 50 and above => PASS

// let score = 55;

// if (score >= 50) {
//   console.log("You PASS");
// } else {
//   console.log("You FAIL");
// }

// switch (condition) {
// cases: execute command
// default:
// execute
// }

// switch (score) {
//   case 6:
//     console.log("Roll Faster");
//     break;
//   case 4:
//     console.log("Roll Fast");
//     break;
//   case 3:
//     console.log("Roll Normal");
//     break;
//   case 2:
//     console.log("Roll Slow");
//     break;
//   case 1:
//     console.log("Roll Slower");
//     break;
//   default:
//     console.log("STOP");
// }

// let cutlery = "spoon and knife";
// switch (cutlery) {
//   case "spoon":
//   case "fork":
//   case "knife":
//   case "plate":
//   case "pot":
//     console.log("I am a cutlery");
//     break;
//   case "ball":
//   case "toy":
//   case "tv":
//     console.log("I am not a cutlery");
//     break;
//   default:
//     console.log("You have to put a cutlery");
// }
// let score = 3;

// if (score === 55) {
//   console.log("I passed");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else if (score === 75) {
//   console.log("I pass well well");
// }
// else {
//   console.log("I can't say!");
// }

// 00:00 - 11:59
// 12:00 - 15:59
// 16:00 - 23:59
// let xx = 13;
// console.log(12 > xx > 0);

// let time = 35;

// if (time >= 0 && time <= 12) {
//   console.log("Good Morning");
// } else if (time >= 13 && time <= 16) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good Evening");
// }
/**
 * while
 * doWhile
 * for
 * forIn
 * forOf
 * forEach
 */

// while (condition) {
//   execute
// }

// let count = 0;
// while (count < 10) {
//   count++;
//   console.log("Print out Count: ", count);
// }

// do {
//   count++;
//   console.log("Print out Count: ", count);
// } while (count < 10);

// let myName = "Peter Petx";
// let newLetter = myName[0];

// console.log(newLetter);

// for (let i = 0; i < myName.length; i++) {
//   console.log(myName[i], i);
// }
// let i = 0;
// while (i <= myName.length-1) {
//   console.log(myName[i], i);
//   i++;

// }

// Assignment
// For loops arguement: 
// 1st arguement: initialization
// 2nd arguement: condition 
// 3rd arguement: afterthought
// for(let i=70; i<72; i++){
//   let hour =i%24;
//   if (hour>=0&&hour<12){
//     console.log("good morning");
//     break
//   }else if (hour>=12&& hour<18) {
//     console.log("good afternoon");
//     break
//   }else {
//     console.log("good evening");
//     break
//   }
// }
// Assignment
// Use the if and else if method to get grades like A, B, C.....
// let score= 73
// if (score>= 75 && score <=100) {
//   console.log("A");
// }else if ( score>=70 && score <=74) {
//   console.log("B");
// }else if (score>=60 && score <=69) {
//   console.log("C");
// }else if ( score>= 50 &&score <=59) {
//   console.log("D");
// }else if (score>= 40 && score<= 49) {
//   console.log("E");
// } else{
//     console.log("Fail");
//      }
// Assignment
// Use two Math method to get the maximum and the minimum values in an array
// First method
let y= [5, 4, 3, 2, 8, 9, 11, 37]

// console.log(Math.max(...y));
// console.log(Math.min(...y));

// Second Method
// console.log(
//   y.reduce((a, b) => {
//     return Math.max(a, b);
//   }, -Infinity),
// );

// console.log(
//   y.reduce((a, b) => {
//     return Math.min(a, b);
//   }, Infinity),
// );

