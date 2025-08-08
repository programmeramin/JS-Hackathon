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
  newArr.push("Mr " + name[i]);
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

for (let i = 0; i < 8; otup = otup + Math.floor(Math.random() * 10), i++); //console.log(otup);

var singleNumber = function (nums) {
  nums = [2, 2, 1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      console.log(nums[i][j][2]);
    }
  }
};

const numbers = [12, 98, 45, 63, 21, 72];

for(const num of numbers){
    // console.log(num);   
}

const subjects = ["Bangla", "Math", "English", "Science", "Physics"];

for(const sub of subjects){
   // console.log(sub);
    
}

const Foods = ["Beriyani", "Kacchi", "Polao",];


for(const food of Foods){
   // console.log(food);
    
}


let nums = 0;
while (nums < 5) {
console.log(nums);
nums = nums + 1;
}

// Output: 0 1 2 3 4

