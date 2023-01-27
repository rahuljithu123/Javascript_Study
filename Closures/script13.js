// implement caching || memoizing  function(to minimize time execution)
function myMemoize(fn,context){
    const res={};
    return function (...args){
        var argsCache=JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache]=fn.call(context || this,...args);
        }
        return res[argsCache]
    }
}

const clumsyProduct=(num1,num2)=>{
    for(let i=1;i<=100000000;i++) {}
    return num1*num2;
}

const memoizedClumzyProduct=myMemoize(clumsyProduct);

console.time("first call")
console.log(memoizedClumzyProduct(9467,7649))
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("second call");