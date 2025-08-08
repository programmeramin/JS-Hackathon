const fruits = ["Banana",  "Orange",  "Lemon", "Apple", "Mango"];


const map = fruits.map((value) => {
    if(value === "Apple"){
        return "Apple"
    }else{
        return "N/A"
    }
});


const arr = [];

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === "Apple"){
         arr.push("Apple")
    }else{
        arr.push("N/A")
    }
};

const filter = fruits.map((f) => `${f} - +` );

console.log(filter);


