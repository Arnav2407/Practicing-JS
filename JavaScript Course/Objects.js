const product = {
    name: 'socks',
    price: 1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product)

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product)

const product1 = {
    name:'shirt',
    ['delivery-time']: '1-day',
    rating:{
        stars: 4.5,
        count: 87
    },
    //Method
    fun: function function1() {
        console.log('function inside object');
    }
};

console.log(product1);
console.log(product1.name);
console.log(product1['name']);
console.log(product1['delivery-time']);

console.log(product1.rating.count);
product1.fun();

//JSON Built in function
console.log(JSON.stringify(product1));
const jsonString = JSON.stringify(product1);
console.log(JSON.parse(jsonString));

//localStorage Built in function
//localStorage()

console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};
const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

const object3 = {
    message: 'Good job!'
};

console.log(object3 === object1);
console.log(object2 === object1);

const object4 = {
    message: 'Good job!',
    price: 799
};

const{message,price} = object4;
console.log(message);
console.log(price);

const object5 = {
    message,
    //method: function function1(){
    //    console.log('method');
    //};
    method(){
        console.log('method');
    }
};

console.log(object5);
object5.method();