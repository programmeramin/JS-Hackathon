// array methods
const fruits = ["Banana",  "Orange",  "Lemon", "Apple", "Mango"];


// find method find((f) => f === "Orange" ) anonymous function

const resul = fruits.find((f) => f === "Orange" || f === "Mango" );



// FindeIndex method
const findIndex = fruits.findIndex((f) => f === "Orange");
//console.log(findIndex);

// Filter method
const filter = fruits.filter((f) => f === "Orange" || f === "Mango");
//console.log(filter);

// slice method akta array theke kop diye akta ongso niye asa

const slice = fruits.slice(2,4);
//console.log(slice);


// splice method kop diye remove kore dibe number of element splice(start, deleteCount)
const splice = fruits.splice(2, 2);

// on more example of splice
const removeadd = fruits.splice(2, 2, "Grape", "Guava", "Pineapple");

//console.log(removeadd); 
//console.log(fruits);

// concat method
///const concat = fruits.concat(["Grape", "Guava", "PineApple"]);

// console.log(concat);

// push method sudhu element er seshe akta value add korbe
const push = fruits.push("PineAplle");

