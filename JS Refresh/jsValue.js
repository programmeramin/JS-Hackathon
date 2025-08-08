
// false value
// false, 0, undefined, "", null, NaN

const result = NaN;
 
if(result === false){
     console.log('False value');
     
}else{
   console.log('Truthy value');
   
}

const a = 6;

const res = a % 2 ===0 ? "Even" : a % 3 === 0 ? "Divisible by 3" : "Simple Odd";

console.log(res);
