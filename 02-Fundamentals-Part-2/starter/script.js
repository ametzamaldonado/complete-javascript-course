let peopleData = [{name: "Mark", massInkg: 78, heightInMeters: 1.69}, {name: "John", massInkg: 92, heightInMeters: 1.95}]

let markHigherBMI = true;
let markBMI = peopleData[0].massInkg/(peopleData[0].heightInMeters ** 2);
let johnBMI = peopleData[1].massInkg/(peopleData[1].heightInMeters ** 2);
if(markBMI < johnBMI){
    markHigherBMI = false;
    console.log("John's BMI is higher than Mark's!");
} else{
    console.log("Mark's BMI is high than John's!");
}
