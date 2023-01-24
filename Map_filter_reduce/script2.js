//filter method takes each element in an array and it applies a conditional statement against it 
//if the condition returns true,the element gets pushed into the output array
//if the condition returns false,the element does not get pushed into the output array
//in short filter returns only those elements from the array which fulfills the provided criteria

const nums=[1,2,3,4];

const moreThanTwo=nums.filter((num)=>{
    return num>2;
})
console.log(moreThanTwo)