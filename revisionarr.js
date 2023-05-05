
// 1. The whole ratings
// 2. Sum of the ratings
// 3. The average of the ratings
// Note: In this work the ratings must be random and the must not be less than 15
// 4. Getting the number of people that rated for 5, 4, 3, 2, 1
// 5. The number of ratings must be greater than 15
// 6. Length 0f the numbewr off people that rated for each of the ratings

let a = Math.floor(Math.random()*100)

let arr = []
let ratings = []

let one = []
let two = []
let three = []
let four = []
let five = []
let zero = []


 if (a<=15){
    console.log(`I need more ratings`)
 }else {
    for(i=0; i<a; i++){
    let d = {name: "Tooboy", score: Math.floor(Math.random()*6)}
    arr.push(d)
    ratings.push(d.score)
    if(d.score===1){
        one.push(d.score)
    }else if(d.score===2){
        two.push(d.score)
    }else if(d.score===3){
        three.push(d.score)
    }else if(d.score===4){
        four.push(d.score)
    }else if(d.score===5){
        five.push(d.score)
    }else{
        zero.push(d.score)
    }

 }}
console.log(ratings)
let sum = ratings.reduce((a,b)=>{
    return a + b
})
console.log(sum, `is the sum of the ratings`)
let avg = Math.floor(sum/ratings.length)
console.log(avg, `is the average of the ratings`)

console.log(one.length, `is the number of 1 ratings`)
console.log(two.length, `is the number of 2 ratings`)
console.log(three.length, `is the number of 3 ratings`)
console.log(four.length, `is the number of 4 ratings`)
console.log(five.length, `is the number of 5 ratings`)
console.log(zero.length, `is the number of 0 ratings`)