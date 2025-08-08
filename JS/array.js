let str = "hello world";

let name = [
  "Shakib",
  "Mahmudullah",
  "Tamim",
  true,
  32,
  "Hello world",
  "Emilly",
];

// array push method

// name.push("Amin");

// array pop method

// name.pop()

// array method shift()

//  name.shift()

// array method unshift()

//  name.unshift('Raihan')

// array method delete

// delete name[2]

// array method join();

let array = ["Amin ", "Rakib", "Sahin"];
let array1 = ["Jamin ", "Kabir", "Sahin"];

// let join = array.join(", ")

// array method toString();

let tostr = array.toString();

// array method length();

let len = array.length;

// array concat method

let concat = ["Amin", "Sayem", "Karim"];

let concat1 = ["Sakir", "Sayem", "Mahir"];

let concat2 = ["Rahim", "Sayem", "Raihan"];

let child = concat.concat(concat1, concat2);

// array method

// The slice() method slices out a piece of an array into a new array

let sliceArray = ["Raihan", "Sakil", "Karim", "Morjina", "Emily", "Family"];

let slice = sliceArray.slice(0, 3);

// The splice() method can be used to add new items to an array

let splice = ["Karim", "Morjina", "Emily", "Family"];

let spArray = splice.splice(0, 2);

// ES2019 Introduced the Array flat() method.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const serial = [[1], [2], [5], [4], [6], [7]];

const flattened = serial.flat(); // flattened the array

const maxNum = Math.max(...flattened, 8); // Get the  maximum number or 8

// create an array from 1 to maxNum
const result = Array.from({ length: maxNum }, (_, i) => i + 1);

// i want to output this array serially like 1,3,4,5,6,7,8,9

let arraySerial = [[1], [2], [3], [5], [7], [4], 6];

let serialwise = arraySerial.flat().sort((a, b) => a - b);

console.log(serialwise);

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

// console.log(fruits);

let number = [
  1, 2, 4, 5, 7, 8, 3, 6, 9, 11, 14, 13, 12, 20, 19, 18, 16, 17, 15, 21,
];

let serial1 = number.sort((a, b) => a - b);

let looparray = [[1], [2], [4], [5], [6], [9], [7], [3]];

const flatten = looparray.flat();

const newArray = Math.max(...flatten, 50);

const res = Array.from({ length: newArray }, (_, i) => +i + 1);

console.log(res);

const numbers = [12, 87, 98, 45];
numbers.push(44);
// console.log(numbers);

Output: [12, 87, 98, 45, 44];

const friends = ["balam", "kalam", "salam", "gelam", "khailam",  "pailam"];
const exist = friends.includes("khailam");

if(exist){
   //console.log("Enjoy your party");
}else{
   //console.log("Stay home ");
}

const index = friends.indexOf("gelam");

console.log(index);


const arrayInclude = ["Mango", "Lichi", "Pepe", "Apple"];

const isMango = arrayInclude.indexOf("Mango");

if(isMango){
  console.log("Have a mango");
  
}else{
  console.log("Don't have a mango");

}

const city = ["Dhaka", "Chittagong", "Sylhet"]
const addCity = city.push("rajshahi");
const checkRajshahi = city.includes("Rajshahi");

console.log(checkRajshahi);

