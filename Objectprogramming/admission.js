
//8. University  App
// I. University Subjects of 4 subjects 
// Ii. Total score to be 200
// Iii. If it's greatqqqqer then add to the array
// 8q
// Iii. If it's greater than 200 score then add to the array
// Then show names of students in the order of the score

// 8, A school(University) Admission app, that Admit in students.
const prompt = require('prompt-sync')()
class Admission{
    constructor(name){
        this.admissionlist = []
        this.name = name
    }

    automatic(){
        
    while (true){
    // let admissionlist = []
    let name = prompt('Input your name: ')
    
    if(name.toUpperCase() === 'QUIT'){
        break
    }
    else{
    let mathsscore = Math.floor(Math.random()*100)
    let englishscore = Math.floor(Math.random()*100)
    let physicsscore = Math.floor(Math.random()*100)
    let chemscore = Math.floor(Math.random()*100)
    let totalscore = mathsscore + englishscore + physicsscore + chemscore
    let Student = {
        name,
        mathsscore,
        englishscore,
        physicsscore,
        chemscore,
        totalscore,
    }
    
    admissionlist.push(Student)
    }
    }
    console.log(admissionlist)
    //cutoffmark - 200
    
    console.log('The names of the students that were admitted are: ')
    let cutoffscores = admissionlist.filter(el=>{
        return el.totalscore >= 200
    })
    
    // console.log(cutoffscores.map((el)=>{
    //     return el.name
    // }))
    
    for(let i = 0; i<cutoffscores.length; i++){
        console.log(cutoffscores[i].name)
    }
    }
    add(name){

        this.name = name
    
        let mathsscore = Math.floor(Math.random()*100)
        let englishscore = Math.floor(Math.random()*100)
        let physicsscore = Math.floor(Math.random()*100)
        let chemscore = Math.floor(Math.random()*100)
        let totalscore = mathsscore + englishscore + physicsscore + chemscore
        let Student = {
            name,
            mathsscore,
            englishscore,
            physicsscore,
            chemscore,
            totalscore,
        }
        
        this.admissionlist.push(Student)
        
        
        // console.log(this.admissionlist)
        //cutoffmark - 200
        
    }
    getAdmittedStudents(){
        console.log(this.admissionlist)
        console.log('The names of the students that were admitted are: ')
        let cutoffscores = this.admissionlist.filter(el=>{
            return el.totalscore >= 200
        })
        
        // console.log(cutoffscores.map((el)=>{
        //     return el.name
        // }))
        
        for(let i = 0; i<cutoffscores.length; i++){
            console.log(cutoffscores[i].name)
        }
        
    }
}
let admissionlist = new Admission()

admissionlist.add('Dera')
admissionlist.add('Franklin')
admissionlist.add('Tochukwu')
admissionlist.add('Austine')
admissionlist.add('Precious')
admissionlist.add('Peter')
// admissionlist.add('Funny')
admissionlist.getAdmittedStudents()


// const prompt = require(`prompt-sync`)()

// // let admissionlist = []

// class Admission {
//     constructor(name){
//         this.name = name
//         this.admissionlist = []
//     }
// entry () {
//         while(true){
//             let  name = prompt(`Welcome please enter your name: `)
//         if (name.toUpperCase()=== `QUIT`){
//             break
//         }else if (!isNaN(name)){
//             console.log(`Input a valid name`); break
//         }else {
//             let engscore = prompt(`Engscore: `)
//             let mathscore = prompt(`Mathscore: `)
//             let physcore = prompt(`Phycore: `)
//             let chemscore = prompt(`chemscore: `)
//         let totalscore = parseInt(engscore) + parseInt(mathscore) + parseInt(physcore) + parseInt(chemscore) 
//         if (isNaN(engscore)){
//             console.log(`Input a valid number`); break
//         }else if (isNaN(mathscore)){
//             console.log(`Input a valid number`); break
//         }else if (isNaN(physcore)){
//             console.log(`Input a valid number`); break
//         }else if (isNaN(chemscore)){
//             console.log(`Input a valid number`); break
//         } else{
//             let Student ={
//                 name,
//                 engscore,
//                 mathscore,
//                 physcore,
//                 chemscore,
//                 totalscore,
//             }
//             this.admissionlist.push(Student)
//         }
//         }
//         }
//         // console.log(admissionlist)
//         let cutOffScores = this.admissionlist.filter(el=>{
//             return el.totalscore >= 200
//         })
//         console.log(cutOffScores)
//         console.log(`The names of the students that were admitted into our school were: `)
//         for (let i = 0; i<cutOffScores.length; i++){
//             console.log(cutOffScores[i].name);
//         }
//         console.log(`The number of student that were admitted are: `, cutOffScores.length)
//     }
// }
// let UWGschools = new Admission()
// UWGschools.entry()