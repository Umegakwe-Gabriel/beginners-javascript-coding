const prompt = require("prompt-sync")();
let record = [];
let student = {};
// let name = prompt("Enter your Name")

// student = {
//     name: "Peter",
//     date: "Wed 08-03-2023",
//     time: "11:01:23AM",
// }


class Register{
    
    constructor(database){
        this.database=[];
    }
    average(){
        let i = numValues;
        
        for (i>0; i<=numValues; i++) {
            let name = prompt ("Average score or press r to Remove name: ").toLowerCase();
            if (name === "a"){
                let numValues = this.database.length;      
                let scoreValues = this.database.map((el)=> {
                    return el.score
                });
                let averageValues = scoreValues.forEach(element => {
                    sum += element;
                });
                let finalValue = averageValues/numValues;
                console.log(finalValue);
             return finalValue;   
            }else if(name ===r){
                console.log(this.database);
                this.remove(); 
                   break;
            }
            else{
               console.log(this.database);
               this.attendance();
               break;           
        }
           }
    }

 static remove(){
       while (true) {
        let name = prompt ("Enter the name you want to Remove or press q to Exit: ").toLowerCase();
        console.log(this.database)
        if (name === "q"){
            break
        }else{
            this.database = this.database.filter(el=> {
            return el.name !== "toochukwu";
        });
        console.log(this.database);
    }
       }
    }
 attendance() {
        while (true) {
            let realDate = new Date();
        let dateTime= realDate.toString();
        
        let date = dateTime.slice(0, 15);
        let newTime = dateTime.slice(16, 24);
        let time =newTime.split(":")[0];
        let time1 =newTime.split(":")[1];
        let time2 =newTime.split(":")[2];
        let score = Math.floor(Math.random()* 10);
        // let score = prompt("Enter your score or press `q` to: ");
        let name = prompt("Enter your Name or enter `a` to get average score: ").toLowerCase();
        
        if (name === "a"){
            // console.log(this.database);
            this.average();
            break;
        }else{
            if(time == 12) {
                let realTime =`${time%12}:${time1}:${time2} PM`
                student ={
                    name,
                    date,
                    time: realTime,
                    score,
                };
               
                this.database.push(student);
             console.log(this.database);
            }else if(time > 12) {
                let realTime =`${time%12}:${time1}:${time2} PM`
                student ={
                    name,
                    date,
                    time: realTime,
                    score,
                };
                this.database.push(student);
                console.log(this.database);
            }else{
                let realTime =`${time}:${time1}:${time2} AM`
                student ={
                    name,
                    date,
                    time: realTime,
                    score,
                };
                this.database.push(student);
                console.log(this.database);
            }
        }
        }
    } 
}
let reg = new Register();
reg.attendance();
reg.average();
reg.remove();
console.log(record);

// // Select from database
// // console.log(record.filter(el=> {
// //     return el.name === "toochukwu";
// // }),
// // );

// // // Delete from database
// // console.log(record.filter(el=> {
// //     return el.name !== "toochukwu";
// // }),
// // );
// // // anytime you want to remove or separate use filter

// reg.attendance();
// // reg.remove();

// class Point {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//    static readingDistance(a,b){
//        let mainX = a.x + a.y;
//        let mainY = b.x + b.y;
//        console.log(mainX, mainY);
//    } 

// }
// let pointA = new Point(7, 2);
// let pointB = new Point(5, 2);

// console.log(pointA);
// console.log(pointB);

// Point.readingDistance(pointA, pointB);

// class Grade {
//     constructor(name, score){
//         this.score = score;
//         this.name = name;
//     }

//     static getGrade = (...args) => {
//         // console.log(args);
//         let data = [...args];
//         let newData = data.map((el)=> {
//             return el.score;
//         });
    
//         let newScore = newData.sort((a,b) => {
//             return a-b;
//         });
        
//         let score = newScore[newData.length -1];

//        return `The highest score is ${ data.filter ((el) => {
//         return el.score ===score;
//     })[0].name} he/she scored: ${score}mark `;
//     }
// }

// let peter = new Grade("Peter", 20);
// let peter1 = new Grade("Peter1", 70);
// let peter2 = new Grade("Peter2", 50);

// console.log(Grade.getGrade(peter, peter1, peter2));

