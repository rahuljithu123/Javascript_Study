const nums=[1,2,3,4];
const multiplyThree=nums.map((num,i,arr)=>{ //(current element,index,current array)
    return num*3;
})
console.log(multiplyThree)

//map method is used for creating a new array from existing one by applying function to each one of the elements
