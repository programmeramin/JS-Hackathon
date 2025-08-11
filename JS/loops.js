// লুপ হলো এমন একটা কোড ব্লক যা একাধিক বার চালানো হয় যতক্ষণ না একটা শর্ত সত্য থাকে।

let names = ["Sakib", "Mashrafee", "Rohit", "Mahmdullah"];

// for(name of names){
//     console.log(name);

// }

// names.forEach((el, index)=>{
//     console.log(index + 1 , el);

// })

// names.map((el, index)=>{
//     console.log(index + 1 , el);

// });

for (let i = 1; i <= 10; i++) {
  if (i == 5) break;
  // console.log(i);
}

let cars = ["BMW", "VOLVO", "SAAB", "NISSAN", "FORD"];

let text;

for (let i = 0; i < cars.length; i++) {
  text += i[0];
  //console.log(cars);
}

let num = 34;

num += 23;

let name = ["Shakib", "Tamim", "Mushfiq", 12, true, "Hello world", "Emily"];

// for(let i = 0; i < name.length; i++){
//     name[i]  = "RAHIM"
// };

// In this array every array value will do start position again mr add so lets get started

let newArr = [];

for (let i = 0; i < name.length; i++) {
  newArr.push("Mr" + name[i]);
}

// console.log(newArr);

let number = [1, 2, 3, 4, 5];

let newNum = [];

for (let i = 0; i < number.length; i++) {
  newNum.push(number[i] * 2);
}

let persons = [
  ["Setu", 99, "Javascript"],
  ["Sumit", 99, "PHP"],
  ["Hasin", 99, "PYTHON"],
];

let newPer = persons.flat().join(" ");

for (let i = 0; i < persons.length; i++) {
  for (let j = 0; j < persons[i].length; j++) {
    // console.log(persons[i][j]);
  }
}

//  for(let i = 0; i < persons.length; i++){

//     for(let j = 0; j < persons[i].length; j++){
//         console.log(persons[i][j]);

//     }

//  }

// console.log(persons[2][2]);

let phones = [
  ["Iphone 16 pro max", "Apple", "160000"],
  ["S24 Ultra pro", "Samsung", "120000"],
  ["Redmi 15 pro ", "Xiaomi", "160000"],
];

for (let i = 0; i < phones.length; i++) {
  for (let j = 0; j < phones[i].length; j++) {
    // console.log(phones[i][j]);
  }
}

for (parent of phones) {
  for (child of parent) {
    //  console.log(child);
  }
}

phones.forEach((value, index) => {
  value.forEach((data) => {
    // console.log(data);
  });
});

// create random otp 5 digit
let otp = "";

for (let i = 0; i < 5; otp += Math.floor(Math.random() * 10), i++);

//console.log(otp);

// create random otp 5 digit

let otup = "";

for (let i = 0; i < 5; otup += Math.floor(Math.random() * 10), i++);
console.log(otup);

var singleNumber = function (nums) {
  nums = [2, 2, 1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      console.log(nums[i][j]);
    }
  }
};

const numbers = [12, 98, 45, 63, 21, 72];

for (const num of numbers) {
  // console.log(num);
}

const subjects = ["Bangla", "Math", "English", "Science", "Physics"];

for (const sub of subjects) {
  // console.log(sub);
}

const Foods = ["Beriyani", "Kacchi", "Polao"];

for (const food of Foods) {
  // console.log(food);
}

let nums = 0;
while (nums < 5) {
  // console.log(nums);
  nums = nums + 1;
}

// Output: 0 1 2 3 4

// while Loop

let whileLoop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < whileLoop.length) {
  whileLoop[i] = whileLoop[i] * 3;
  // whileLoop = whileLoop + 1
  // whileLoop += 1;
  i++;
}

// console.log(whileLoop);

let programmer = [
  ["Setu", 99, "Javascript"],
  ["Sumit", 99, "PHP"],
  ["Hasin", 99, "PYTHON"],
];

for (let i = 0; i < programmer.length; i++) {
  for (let j = 0; j < programmer[i].length; j++) {
    // console.log(programmer[i][j]);
  }
}

// ২.৪ for...in লুপ
// কী জন্য: অবজেক্টের প্রপার্টির ওপর লুপ চালাতে।

// সিনট্যাক্স:

const person = { name: "Amin", age: 25, city: "Dhaka" };

for (let key in person) {
  // console.log(key, ":", person[key]);
}

// ২.৫ for...of লুপ
// কী জন্য: iterable (array, string, map, set) এর উপাদান গুলো লুপ করার জন্য।

// সিনট্যাক্স:

const arr = [10, 20, 30];
for (let value of arr) {
  // console.log(value);
}



// ৩. লুপের মধ্যে break এবং continue
// break – লুপ সম্পূর্ণ ভাঙে (stop করে)

// continue – ওই iteration বাদ দিয়ে পরের iteration এ চলে যায়


for(let i = 0; i <= 5; i++){
  if(i === 5) break;  // ৫ এ লুপ থেমে যাবে
  if(i === 3) continue;  // ৩ এ skip করবে
  // console.log(i);
  
}


// ৪. অ্যাডভান্স টিপস ও ট্রিকস
// ৪.১ Nested লুপ (লুপের ভিতরে আরেকটি লুপ)
// js
// Copy code


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        // console.log(`i=${i}, j=${j}`);
    }
}


let k = 0;

while(k < 5){
  // console.log("while loop", i);
  k++;
  
}


// ১ থেকে ১০ পর্যন্ত সংখ্যাগুলোর মধ্যে ৫ বাদ দিয়ে প্রিন্ট করো।
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    //console.log(i);
}


for(let i = 150; i <= 170; i++){
    if(i % 7 === 0){
      console.log(i);
      
    }
}


let roll = 0;

for(let i = 31; i <= 55; i++){
  roll = roll + i;

}

// console.log(roll);

// 25 TO 75 print and jogfol

let sum = 0;

for(let i = 25; i < 75; i++){
  sum = sum + i;
  
}
// console.log(sum);


for(let i = 0; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}