function find(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  
    console.log(a[index]);
  
}


console.time("6");
find(6);
console.timeEnd("6");
console.time("50");
find(50);
console.timeEnd("50");
