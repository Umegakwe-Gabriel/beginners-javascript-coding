
// let date = new Date("2023-02-28")
// let val = date.splice(0,10)

// console.log("the Result: ",  val)
// console.log(date);


// switch (vote) {
//     case 1 : {
//         console.log("Poor Roll");
//         break;
//     }
//     case 2: { 
//         console.log("Not bad");
//         break;
//     }
//     case 3: { 
//         console.log("Good");
//         break;
//     } case 4: { 
//         console.log("Excellent");
//         break;
//     }
//     case 5: { 
//         console.log("Bravo");
//         break;
//     }
//     default: { 
//         console.log("Wow");
//         break;
//     }
// }
// if  (val ===1){
//     console.log("Poor Roll");
// } else if (val ===2 ) { 
//     console.log("Not bad");
// } else if (val ===3) { 
//     console.log("Good");
// } 
// else if (val ===4) { 
//     console.log("Excellent");
// } 
// else if (val ===5 ) { 
//     console.log("Bravo");
// } 
// else { 
//     console.log("Superb");
// } 
 


// let guess = 3;
// console.log(val, guess);

// if (val === guess) {
//   console.log("You won");
// } else {
//   console.log("You loss");
// }

// let dices = [1, 2, 3, 4, 5, 6]
// let newVal = Math.floor (Math.random()*dices.length);

// let val = dices[newVal]
// let guess = 3;
// console.log(val, guess);

// if (val === guess) {
//   console.log("You won");
// } else {
//   console.log("You loss");
// }

// Assignment
// Explain 4 String methods using use cases for each of them
// The Length Method
// Note: 1. The length method calculate the total number of values in a String
// 2. It returns a number
// 3. The length method counts the spaces in the string

// The replace method
// 1. It takes in two arguments(what you want to replace, what you want to replace it with)
// 2. It returns a mutated or a changed string

// The indexOf Method
// The indexOf gives the index position of the stated value in the string
// 2. The return of the indexOf method is a number

// The difference between the counting of the indexOf and the length is that the length start counting from 1 while the indexOf start counting from zero

// The concat method
// 1. The concat method joins two strings together.
// 2. The concat method takes in a string and returns a string
// 3. The concat method can also be designated with a "+" sign

// let a = "Oh what a beautiful day the Lord has made"
// let b = a.lastIndexOf("e")
// console.log(b)
// let c= "This God is so wonderful"
// let d = a.concat( c,".")
// console.log(d)

// 2. Three array methods and give use cases
// 1. Sort Method
// 2. The Map ,,,
// 3. The Some Method

// 1. The Sort Method: It is used to arrange values in anarray from the smallest to the biggest i.e it is used to arrange the elements in an array in ascending order
// The return type for the sort method is an array. ()=>{}=Function

// 2. The Map method: It iterates through an array and returns an array. It scans through an array and returns in an array the scanned elements.
// This means that the map method returns an array

// 3. The Some method: It takes a parameter and returns a Boolean(true or false). The some method it iterates(scans) through
// an array to check if the indicated element in the array is there or Notification. if it is it returns true if it is not it returns false  
// let as =[1, 5, 3, 12, 300, 250, 500, "what a day is this", "are you in CodeLab" ]
// // // console.log(as.some ((completearray) => { return(completearray === "500" );}),)

// Assignment
// 3. Using the for loop and the if and else if we should make a time setting whereby there is continuity such theat if we place any number it would give us the greeting according to the time. of the day
// For Loop:
// 1. The initilization or the declaration
// 2. The condition
// // 3. The afterthought( the increment or the decrement or the flow)

// 4. Using the for loop and the if and else if  we should make this to greet us according to the time stated in pm and am

// for( i=23; i<72; i++ ){
// let time =i%24
// if( time>=0 && time<=12){
// console.log("Good morning", "it's", +i+ "am" , "Happy New Month");
// break;
// }else if ( time>=12 && time<=18){
//     console.log("Good afternoon", "it's", +i+ "pm" , "Happy New Month");
//     break;
//     }else{
//         console.log("Good evening", "it's", +i+ "pm " , "Happy New Month");
//         break;
//         }}

// Assignment 
// 5.  To use two math method to ge the maximum and minimum values in an array
// let y = [25, 50, 14, 23, 45, 36, 73, 3, 6, 8, 24]
// console.log(Math.min(...y))
// console.log(Math.max(...y))

// 2nd method 
// we would two unfamiliar things:
// 1. reduce array nmethod add;
// 2. -Infinity and (+)Inifinity
// function: ()=>{}
// let y = [25, 50, 14, 23, 45, 36, 73, 3, 6, 8, 24]
// console.log( y.reduce((a,b)=> {return Math.min(a,b);}, +Infinity),);

// Assignment
// 6. Determine the score of a student such that it would be giving us A, B, C, D, E, F
let ss = 86;
if ( ss>=75 && ss<=100){
    console.log("A");
} else if ( ss>=70 && ss<=74){
    console.log("B");
} else if ( ss>=60&& ss<=69){
    console.log("C");
} else if ( ss>=50 && ss<=59){
    console.log("D");
} else if ( ss>=40 && ss<=49){
    console.log("E");
}else {
    console.log("F");
}
