// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
*/

// let marksMassInkg = 78;
// let marksHeightInMeters = 1.69;
// let johnsMassInkg = 92;
// let johnsHeightInMeters = 1.95;

let peopleData = [{name: "Mark", massInkg: 78, heightInMeters: 1.69}, {name: "John", massInkg: 92, heightInMeters: 1.95}]

// let totalBMI = 0;
// let personName = '';
// for(let person of peopleData){
//     totalBMI += person.massInkg / (person.heightInMeters ** 2)
//     personName = person.name;
//     console.log(personName + ' --> ' + totalBMI.toFixed(2) + 'kg/m')
// }


let markHigherBMI = true;
let markBMI = peopleData[0].massInkg/(peopleData[0].heightInMeters ** 2);
let johnBMI = peopleData[1].massInkg/(peopleData[1].heightInMeters ** 2);
if(markBMI < johnBMI){
    markHigherBMI = false;
}
console.log(markHigherBMI);


