/*c
const myArray = [10,20,30,];
console.log(myArray);

console.log(myArray[1]);
myArray[0] = 99;
console.log(myArray);

[1,'hello',true,{name:'socks'},[1,2]]
console.log(typeof [1,2]);
console.log(Array.isArray([1,2]));

console.log(myArray.length);
console.log(myArray);

myArray.push(100);
console.log(myArray);


let i = 1;

while(i<=5){
    console.log(i);
    i++;
}

for(let i=1;i<=5;i++){
    console.log(i);
} 

let randomNumber = 0;

while(randomNumber<0.5){
    randomNumber = Math.random();
}
console.log(randomNumber);
myArray.splice(0,1);
console.log(myArray);
*/
const array1 = [1,2,3];
const array2 = array1;
array2.push(4);
console.log(array1);
console.log(array2);

//destructuring
const [firstValue, secondValue] = [1,2,3];

//break
for(let i =1;i<=10;i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i);
    if(i===8){
        break;
    }
}

let i=1;
while(i<=10){
    if(i%3 === 0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
function doubleArray(nums){
    const numsDoubled = [];

    for(let i=0;i<nums.length;i++){
        const num = nums[i];
        numsDoubled.push(num * 2);
    }
    return numsDoubled;
}
console.log(doubleArray([1,1,3]));
console.log(doubleArray([2,2,5]));