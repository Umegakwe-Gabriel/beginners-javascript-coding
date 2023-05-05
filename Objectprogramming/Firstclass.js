const prompt = require(`prompt-sync`)()
  // let admissionlist = []

// entry()
class Admission {
  constructor(name){
    this.name = name
    this.admissionlist = []
  }
 entry () {
    while(true){
      let name = prompt(`Welcome please input your name or press q to quit: `)
  if (name.toUpperCase()=== `Q`){
    break
  }else if (!isNaN(name)){
   console.log(`Input a valid name`);break
  }else {
    let engscore = prompt(`engscore: `)
    let mathscore = prompt(`mathscore: `)
    let physcore = prompt(`physcore: `)
    let bioscore = prompt(`bioscore: `)
    let totalscore = parseInt(engscore) + parseInt(mathscore) + parseInt(physcore) + parseInt(bioscore) 
  
    if (isNaN(engscore)){
      console.log(`Input a valid number`);break
    }else if (isNaN(mathscore)){
      console.log(`Input a valid number`);break
    }else if (isNaN(physcore)){
      console.log(`Input a valid number`);break
    }else if (isNaN(bioscore)){
      console.log(`Input a valid number`);break
    }else {
       let Student ={
        name,
        engscore,
        mathscore,
        bioscore,
        totalscore,
       }
       this.admissionlist.push(Student)
    }
  }
    }
  console.log(this.admissionlist)
  
  let cutOffScores = this.admissionlist.filter(el=>{
    return el.totalscore >= 200
  })
  console.log(cutOffScores)
  console.log(`The names of students that were admitted into our school are: `)
  
  for (let i = 0; i<cutOffScores.length; i++){
    console.log(cutOffScores[i].name)
  }
  console.log(`The number of student that were admitted into our school is: `, cutOffScores.length)
  }
}
let UWGschools = new Admission()
UWGschools.entry()