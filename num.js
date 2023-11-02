const arr=[2,4,5,6,7,3,5];
const result=arr.map((item)=>item**3);
console.log("cube: ");
console.log(result)

const square=arr.map((item)=>item**2);
console.log("square:");
console.log(square);

const add=arr.map((item)=>"1" +item);
console.log("addition:");
console.log(add);

const mult=arr.map((item)=>item*5);
console.log("multiplication of single element 5:");
console.log(mult);

const mult2=arr.map((item)=>item*10);
console.log("multiplication of single element 10:");
console.log(mult2);