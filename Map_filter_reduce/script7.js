//map vs forEach
//map method returns an array(new array) not the modified original array(not going to modify original array)
//forEach method can modify original array 
//forEach method cannot return samely or anything like map method ,both have different usecases
//forEach method cannot chain other methods,but map method can chain other methods


const arr=[2,5,3,4,5];
const mapResult=arr.map((ar)=>{
    return ar+2;
});

const forEachResult=arr.forEach((ar,i)=>{
    arr[i]=ar+3;
});
//because original array is modified after forEach method

console.log(mapResult,forEachResult,arr)
