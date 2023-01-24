let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35},
  { name: "Dileep", rollNumber: 7, marks: 55 },
];
const names=students.map((stu)=>stu.name.toUpperCase());
console.log(names);


const details=students.filter((stu)=>stu.marks>60);
console.log(details);

const details1=students.filter((stu)=>stu.marks>60 && stu.rollNumber>15);
console.log(details1);

const sum=students.reduce((acc,curr)=>acc+curr.marks,0);
console.log(sum);

//map,filter,reduce allows chaining
//we can chain other functions in front of these functions

const names1 = students.filter((stu) => stu.marks > 60).map((stu)=>stu.name);
console.log(names1);
