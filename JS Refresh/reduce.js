// reduce method 

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)







var numb = [1,2,3,4,5,6,7];
var res = numb.reduce((prevValue, currentValue) =>{

    return prevValue + currentValue;
    
}, 9);

console.log(res);




const numbers = [1,2,3,4,5,6];

const result = numbers.reduce((total, currentValue) => total + currentValue, 0);
 


// for of loop

let namee = "Amin Islam";

for(c of namee){
    //console.log(c);
    
} 


// for in loop
const language = {
    name : "Javascript",
    year : 1995,
    creator : "Brendan Eich",
}

for(key in language){
   // console.log(language[key]);
    
}

