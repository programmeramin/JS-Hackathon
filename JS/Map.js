// JavaScript এর Map হল একটা key-value store, যেখানে তুমি যে কোনো টাইপের key রাখতে পারো (string, number, object, function, ইত্যাদি) এবং তার সাথে একটা value সেট করতে পারো।

// খালি Map বানানো
let myMap = new Map();

// Map-এ ডেটা যোগ করা
myMap.set("name", "Amin");
myMap.set("age", 20);
myMap.set(100, "This is number key");

// console.log(myMap.get("name"));
// console.log(myMap.get("age"));

// Object key set
const objKey = { id: 1 };

myMap.set(objKey, "Object as key");

// console.log(myMap.get(objKey)); // ✅ "Object as key"

// Part 4: ✅ Key আছে কিনা চেক করা
// console.log(myMap.has( 100));

// Part 5: ✅ Key মুছে ফেলা
 myMap.delete("age");
// console.log(myMap.has("age"));


// Part 7: ✅ Size বের করা

let users = new Map();
users.set("name", "Amin Islam")
users.set("age",33);

// console.log(users.size);

// Part 5: ✅ The entries() method returns an iterator object with the [key,values] in a map

let text = "";
for(let x of users.entries()){
    text += x + "<br/>";
}

// console.log(text);

// Part 5: ✅ The keys() method returns an iterator object with the keys in a map

for(const x of users.keys()){
    text += x + "<br>";
}

// console.log(text);
let developer = new Map();
developer.set("name", "Sumit Saha");
developer.set("skill", "MERN STACK");
developer.set("age", 34);

let details = "";

for(const x of developer.keys()){
    details += x + "<br>";
}

console.log(details);



// Part 8: ✅ Loop করা;
for(let [key, value] of users){
   // console.log(key, value);
    
}


// ✅Part 10: ✅ ছোট Example Project Idea (Map দিয়ে);
// একটা অ্যারেতে ছাত্রদের নাম আছে, কিন্তু নামগুলো অনেকবার রিপিট হয়েছে। তুমি unique list বের করবে আর প্রতিটি নাম কয়বার এসেছে সেটা count করবে।

let names = ["Amin", "Rahim", "Karim", "Amin", "Rahim", "Amin", "Saddam", "Karim"];

let nameCount = new Map();

for(let name of names){
   if(nameCount.has(name)){
    nameCount.set(name, nameCount.get(name) + 1);
   }else{
    nameCount.set(name, 1)
   }
}


// console.log(nameCount);
