// let a = Math.floor(Math.random()*50)
// console.log(a);
// let arr = []
// let ratings = []

// if (a<=15){
//     console.log(`I need more ratings`)
// }else{
//    let person1 = {name: Tooboy, score: Math.floor(Math.random()*6)}; 
//    console.log(arr.push(person1));
// }


// 8. University  App
// I. University Subjects of 4 subjects 
// Ii. Total score to be 200
// Iii. If it's greatqqqqer then add to the array
// 8q
// Iii. If it's greater than 200 score then add to the array
// Then show names of students in the order of the score

// 8, A school(University) Admission app, that Admit in students.


// class University {
//   constructor(name, location, tuition) {
//     this.name = name;
//     this.location = location;
//     this.tuition = tuition;
//     this.students = [];
//   }

//   admitStudent(student) {
//     if (this.students.length >= 1000) {
//       console.log("Sorry, the class is full.");
//       return false;
//     } else {
//       this.students.push(student);
//       console.log(`${student.name} has been admitted to ${this.name}.`);
//       return true;
//     }
//   }

//   removeStudent(student) {
//     const index = this.students.indexOf(student);
//     if (index === -1) {
//       console.log(`${student.name} is not a student of ${this.name}.`);
//       return false;
//     } else {
//       this.students.splice(index, 1);
//       console.log(`${student.name} has been removed from ${this.name}.`);
//       return true;
//     }
//   }
// }

// class Student {
//   constructor(name, major, gpa) {
//     this.name = name;
//     this.major = major;
//     this.gpa = gpa;
//   }
// }

// // Example usage:
// const university = new University("Example University", "New York City", 50000);
// const alice = new Student("Alice", "Computer Science", 3.8);
// const bob = new Student("Bob", "Business", 3.4);
// const charlie = new Student("Charlie", "Biology", 3.1);

// university.admitStudent(alice); // Output: "Alice has been admitted to Example University."
// university.admitStudent(bob); // Output: "Bob has been admitted to Example University."
// university.admitStudent(charlie); // Output: "Charlie has been admitted to Example University."

// console.log(university.students); // Output: [alice, bob, charlie]

// university.removeStudent(bob); // Output: "Bob has been removed from Example University."

// console.log(university.students); // Output: [alice, charlie]

//8. University  App
// I. University Subjects of 4 subjects 
// Ii. Total score to be 200
// Iii. If it's greatqqqqer then add to the array
// 8q
// Iii. If it's greater than 200 score then add to the array
// Then show names of students in the order of the score

// 8, A school(University) Admission app, that Admit in students.

// const prompt= require(`prompt-sync`)()
// let admissionlist = []

//  const automaticentry = () => {
 
//   while(true) {
//     let name = prompt(`Welcome please register your name: `)
//     let engscore = prompt(`english: `)
//     let mathscore= prompt(`mathscore: `)
//     let physcore = prompt(`physcore: `)
//     let chemscore = prompt(`chemscore: `)

//     if(name.toUpperCase() ===`QUIT`){
//       break;
//     }
//     else{
//   // let mathscore= Math.floor(Math.random()*100)
//   // let engscore= Math.floor(Math.random()*100)
//   // let physcore= Math.floor(Math.random()*100)
//   // let chemscore= Math.floor(Math.random()*100)
//   // let totalscore= mathscore + engscore + physcore + chemscore
  
//    let Student = {
//     name,
//     mathscore,
//     engscore,
//     physcore,
//     chemscore,
//     totalscore,
//   }
  
//   admissionlist.push(Student)
//   }
//   console.log(admissionlist)
//   }

//   let cutOffScores = admissionlist.map(el=>{
//     return el.totalscore
//   })
//   console.log(cutOffScores.filter(el=>{
//     el.cutOffScores >= 200
//   }))


// }
// automaticentry()

const prompt = require(`prompt-sync`)()
// let admissionlist = []

class Admission {
  constructor (name) {
    this.name = name
    this.admissionlist = []
  }
 entry  () {
    while(true){
      let name = prompt(`Welcome enter your name or press q to exit:`)
    if (name.toUpperCase()=== `Q`){
      break
    }else if (!isNaN(name)){
      console.log(`Input a valid name`);break
    }else{
      let engscore = prompt(`Engscore: `)
      let bioscore = prompt(`Bioscore: `)
      let chemscore = prompt(`Chemscore: `)
      let physcore = prompt(`Physcore: `)
    
    let totalscore = parseInt(engscore) + parseInt(bioscore) + parseInt(chemscore) + parseInt(physcore) 
    
    if (isNaN(engscore)){
      console.log(`Input a valid number`);break
    }if (isNaN(bioscore)){
      console.log(`Input a valid number`);break
    }if (isNaN(chemscore)){
      console.log(`Input a valid number`);break
    }if (isNaN(physcore)){
      console.log(`Input a valid number`);break
    }else{
      let student ={
        name,
        engscore,
        bioscore,
        chemscore,
        physcore,
        totalscore,
      }
      this.admissionlist.push(student)
    }
    } 
    }
    console.log(this.admissionlist)
    
    let cutOffMark = this.admissionlist.filter(el=>{
      return el.totalscore >= 200
    })
    console.log(cutOffMark);
    
    console.log(`The names of students that were admitted into our school are: `)
    for (let i = 0; i<cutOffMark.length; i++){
      console.log(cutOffMark[i].name)
    }
    console.log(`The number of students that were admitted into our school is: `, cutOffMark.length)
    
  }
}
let UWGschools = new Admission
UWGschools.entry()




