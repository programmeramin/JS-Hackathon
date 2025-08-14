
// calculator app

function calculator(num1, operation, num2,){

    switch (operation) {
             case "+":
                return num1 + num2;
            case "-":
             return num1 - num2;    
             case "*":
                return num1 * num2;
                case "/":
                return num1 / num2;
    }

}

let result = calculator(20, "+",  10);

// console.log(result);

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numberThree = numbersOne.push(7);
const numbersCombined = [...numbersOne, ...numbersTwo];

// console.log(numbersCombined);

// console.log("5" - "2"); 


function inchToFeet(inch){

    const feet = inch / 12;
    return feet

}

const shovoHeight = inchToFeet(67);

 // console.log(shovoHeight);




 function Calculate(num1, operation, num2,){

    switch (operation) {
        case  "+" :
       return num1 + num2;
       case  "-" :
       return num1 - num2;
       case  "*" :
       return num1 * num2;
       case  "/" :
       return num1 / num2;

    }

 }

 let result2 = Calculate(34, "+", 45);

// console.log(result2);
 


//  ✦ সিনট্যাক্স

const add = (a, b) => a + b;
// বৈশিষ্ট্য
// Hoisting হয় না (যদি var না হয়; কিন্তু var হলেও undefined থাকবে)।

// নিজস্ব this নেই → চারপাশের লেক্সিক্যাল স্কোপ থেকে this নেয়।

// arguments অবজেক্ট নেই → দরকার হলে rest parameter ব্যবহার করতে হয়।

// এক লাইনে হলে return বাদ দেওয়া যায়, এক্সপ্রেশন রিটার্ন হয়।

// Constructor হিসেবে ব্যবহার করা যায় না (new দিলে এরর)।


 const obj = {
  name: "Amin",
  normal: function () {
    console.log(this.name); // Amin
  },
  arrow: () => {
    console.log(this.name); // undefined (global/window context)
  }
};
// obj.normal();
// obj.arrow();


// 3) Higher-Order Function (HOF)
// একটা ফাংশন যেটা—

// আরেকটা ফাংশনকে argument হিসেবে নেয়, অথবা

// আরেকটা ফাংশনকে return করে


// Example 1: ফাংশন আর্গুমেন্ট হিসেবে নেওয়া
function greet(name) {
  return `Hello, ${name}`;
}
function processUser(name, callback) {
  console.log(callback(name));
}
processUser("Amin", greet);

// Example 2: ফাংশন রিটার্ন করা
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
// console.log(double(5)); // 10




const nums = [1,2,3,4,5];

const doubled = nums.filter((n) =>{
  if(n % 2 === 0){
    return n
  }
});

const sumOf = nums.reduce((acc, value) => acc + value);

const max = nums.reduce((acc, value) => Math.max(value));

const min = nums.reduce((acc, value) => Math.min(acc));

console.log(min);


const products = [

  {
    name : "Pen",
    amount : 5,
    price : 10
  },
  {
    name : "Book",
    amount : 2,
    price : 50
  },
  {
    name : "NoteBook",
    amount : 5,
    price : 3000
  }

]

const TotalPrice = products.reduce(function(acc, item){

  return acc + item.amount * item.price;

}, 0);

// Nich argument a 0 is being acc er initial value

const votes = ["Yes", "No", "Yes", "Yes", "Yes", "Absent", "No", "Na"];

const voteResult = votes.reduce((acc, vote) => {

  if(acc[vote]){
    acc[vote]++
  }else{
    acc[vote] = 1;
  }

  return acc;

},{});

// console.log(voteResult);


function Counter() {
  this.count = 0;
  setInterval( function() {  // Q8: setInterval-এর Normal Function এ this global—arrow দিয়ে ফিক্স করা যায়।
    this.count++;
    // console.log(this.count);
  }, 2000);
}
new Counter();


(function(name) {
//  console.log(`Welcome, ${name}`);
})("Amin");  // IIFE (Immediately Invoked Function Expression)—scope isolate করতে, data privacy এর জন্য

const added = a => b => c => a + b + c;
console.log(added(1)(2)(3));
