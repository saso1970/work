//variable

//Primitive

//STring
const name='John Doe'
console.log(typeof name);
//Number
const age=4;
console.log(typeof age);

//Boolean

const hasKids=true;
console.log(typeof hasKids);

//Null
const car=null;
console.log(typeof car);

// Undifined
let test;
console.log(typeof test);

//Symbols
const sym=Symbol();
console.log(typeof sym);

//REFERENCE TYPES _Objects
//Arrey
const hobbies=['movies','music'];
console.log(typeof hobbies);
//Object literal
const adrress={
    city:'Boston',
    state:'MA'
}
console.log(typeof adrress);

const today=new Date();
console.log(today);
console.log(typeof today);
console.clear();
//Type of conversion
let val;
//Number to string
val=String(555);
val=String(4*4)
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Bool to String

val=String(true)
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Date to String
val=String(new Date());
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Array to string
val=String([1,2,3,4]);
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()
val=(5).toString();
val=(true).toString();

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//STRING TO NUMBER

val=Number('5');
val=parseInt('100');//all number
val=parseFloat('100.30');//decimal
//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//Bool to Number
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed);

const val1=5;
const val2='6';
const sum=val1+val2;
//Output
console.log(sum);
console.log(typeof sum);

console.clear();

//MATH OBJECTS

const num1=100;
const num2=50;
let val3;
//Simple math with numbers

val3=num1+num2;
val3=num1*num2;
val3=num1/num2;
val3=num1%num2;

//Math object
val3=Math.PI;
val3=Math.E;
val3=Math.round(2.8);
val3=Math.ceil(2.4);//round to the biger number
val3=Math.floor(2.4);//round to the small number
val3=Math.sqrt(64);
val3=Math.abs(-3);
val3=Math.pow(8,2);
val3=Math.min(2,3,44,5);
val3=Math.max(2,3,44,5);
val3=Math.random();
val3=Math.floor(Math.random()*20+1);//Rendom number to 20

console.log(val3);
console.clear();

//STRING

const firstName='Sasho';
const lastName='Nikolovski'
const age2=49;
const str='Hello there my name is Sasho'
let val4;

val4=firstName + lastName;
//concatination
val4=firstName + ' '+ lastName;
//Append
val4='Bred '
val4+='Traversy'
val4='Hello my name is '+ firstName +  ' and I am ' + age2;

//ESCAPING
val4='That\'s awsome,I can\'t wait';

//LENGTH

val4=firstName.length;

//CONCAT
val4=firstName.concat(' ', lastName);

//CHANGE CASE
val4=firstName.toUpperCase();
val4=firstName.toLowerCase();
val4=firstName[2];

//INDEX OF

val4=firstName.indexOf('S');
val4=firstName.lastIndexOf('s');

//CharAt()
val4=firstName.charAt('2');

// get last character
val4=firstName.charAt(firstName.length-1);

//substring()
val4=firstName.substr(0,4);

//slice()
val4=firstName.slice(0,4);//start from begining
val4=firstName.slice(-3);//start from end

//split()
val4=str.split(' ');//add separate string in array

//replace()

val4=str.replace('Sasho','Vedran');

//includes()
val4=str.includes('Hello');
console.log(val4);