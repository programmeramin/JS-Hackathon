
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

console.log(result);




const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numberThree = numbersOne.push(7)
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

console.log("5" - "2"); 