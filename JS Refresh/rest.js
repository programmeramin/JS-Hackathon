function sum(text, ...rest){
    const result =rest.reduce((total, currentVale) => total + currentVale, 0);
    console.log(`${text} ${result}`);
    
}    
 
console.log(sum("The sum is : ",  5, 6, 7, 8, 9, 20, 55, 66, 66, 77));

