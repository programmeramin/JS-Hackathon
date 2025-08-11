// JavaScript এর Map হল একটা key-value store, যেখানে তুমি যে কোনো টাইপের key রাখতে পারো (string, number, object, function, ইত্যাদি) এবং তার সাথে একটা value সেট করতে পারো।

// খালি Map বানানো
let myMap = new Map();

// Map-এ ডেটা যোগ করা
myMap.set("name", "Amin");
myMap.set("age",  20);
myMap.set(100, "This is number key");

console.log(myMap.get("name"));
console.log(myMap.get("age"));


// Object key set
const objKey = {id: 1};

myMap.set(objKey, "Object as key");

console.log(myMap.get(objKey)); // ✅ "Object as key"
