 const fruits = ["Banana",  "Orange",  "Lemon", "Apple", "Mango"];

// map method 
const map = fruits.map((f) => {
    if(f === "Apple"){
        return "Apple"
    }else{
        return "N/A";
    }
})


const res = [];

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === "Apple"){
         res.push("Apple");
    }else{
         res.push("N/A")
    }
}


console.log(fruits);

 
const result = fruits.map((f) => `${f} - `);

console.log(result);


