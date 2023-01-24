//reduce method reduces an array of values down to just one value
const nums=[1,2,3,4];
const sum=nums.reduce((acc,curr,i,arr)=>{ //(accumulator,currentelement,index,currentarray)
    return acc+curr;
},0);

console.log(sum);