console.log(3<5);

//converts both into the same type
console.log(5=='5.00');

console.log(5==='5.00');

if(false){
    console.log('hello');
} else{
    console.log('else');
}

if(15>=16){
    console.log('eligible');
}
else if(15>=14){
    console.log("almost there")
}
else{
    console.log('not eligible');
}
//and
console.log(true && false);
//or
console.log(true || false);
//not
console.log(!false);

if(5){
    console.log('truthy');
}
if(0){
    console.log('falsy');
}
console.log('text'/5);
let variable1;
console.log(variable1);

//Ternary operator
const result = true ? 'truthy':'falsy'
console.log(result);

const result1 = false ? 'truthy':'falsy'
console.log(result1);

//Guard operator 
false && console.log('hello');

5 && console.log('hello');

//default operator
const currency = undefined || 'USD';
console.log(currency);
