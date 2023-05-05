let record =[]
let student ={}
while(true){
student={
    name: "Peter",
    date: "Wed 08-03-2023",
    time: "11:01:23AM",
};

let realDate =newDate();
let dateTime = realDate.toString();
let date = dateTime.slice(0, 15);
let newTime= dateTime.slice(16, 24);
let time= newTime.split(":")[0];
let time1 = newTime.split(":")[1];
let time2 = newTime.split(":")[2];

    if (time == 12){
 let realTime = `${time}:${time1}:${time2}PM`;
 student={
    name,
    date,
    time,
 }
    }
}
