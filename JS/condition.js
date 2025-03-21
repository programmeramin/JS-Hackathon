
/**
 * first print number 1 to 100
 * 1 % 3 == 0 then position to give print Fizz
 * 1 % 5 == 0  then position to give print Buzz
 * 1 % 3 == 00 && 1 % 5 == 0 then in this position to give FizzBuzz
 */

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
       // console.log("FizzBuzz");
        
    }else if(i % 5 == 0){
       // console.log('Buzz');
        
    }else if(i % 3 == 0){
       // console.log('Fizz');
        
    }else{
       // console.log(i);
        
    }
}



// Swith Case Contional

const day = new Date().getDay();

switch (day) {

    case 0 :
        console.log("Satarday");
        break;
        case 1: 
        console.log("Sunday");
        break;
        case 2:
            console.log("Monday");
         break;   
            case 3:
                console.log("Tuesday");
              break;   
              case 4:
           console.log("Wednesday");
           break;   
           case 5:
               console.log("Thusday");
               break;   
               case 6:
                   console.log("Friday");
                
                     
        
        

}


let number = [1,3,4,6,77,6,8, 34, 56,,23, 89,87,36];

let newNum = [];

for(let i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        newNum.push(number[i])
    }
}

// console.log(newNum);


// in this array from will do  bring out that man age > 30 

let persons = [
    ["Sakib", 39, "USA"],
    ["Tamim", 34, "Dhaka"],
    ["Tanzid", 23, "CTG"],
    ["Taskin", 29, "Dhaka"]
]

let ageLessThan30 = []

for(let i = 0; i <persons.length; i ++){
    if(persons[i][2] <= 30){
        ageLessThan30.push(persons[i])
    }
}

console.log(ageLessThan30);


