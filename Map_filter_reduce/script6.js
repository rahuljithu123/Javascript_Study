//polyfill for reduce
//arr.reduce((acc,curr,i,arr=>{},initialValue)
//if there is no initial value mentioned in the accumulator
//,first element in the array will be selected as  initial value in the accumulator

Array.prototype.myReduce=function(cb,initialValue){
    var accumulator=initialValue;

    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
};

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr, i, arr) => {
  //(accumulator,currentelement,index,currentarray)
  return acc + curr;
}, 0);

console.log(sum);
