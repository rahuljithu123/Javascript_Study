//Question-->//Return total marks for students with marks greater than 60
// after 20 marks have been added to those scored less than 60

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dileep", rollNumber: 7, marks: 55 },
];

const totalMarks=students.map((stu)=>{
    if(stu.marks<60){
        stu.marks+=20;
    }
    return stu;
}).filter((stu)=>stu.marks>60)
  .reduce((acc,curr)=>acc+curr.marks,0);

  console.log(totalMarks);



