// Closure Function  Example

const outer = () =>{

    let count = 0;

    return function inner(){
        count++;
        console.log(count);
    
     }

}

const outerFunction = outer();

outerFunction();



// const shirtPrice = 1000;
// const isCooponValid = false;

// const disCountPrice = shirtPrice - (shirtPrice * 20 / 100);

// if(isCooponValid){
//     console.log(`Discounted Price : ${disCountPrice}`);
    
// }else{
//     console.log(`Price : ${shirtPrice}`);
    
// }

// const ProductAmountPrice = 4000;

// if(ProductAmountPrice >= 5000){
//     const discount = ProductAmountPrice * 10 / 100;
//     const pay = ProductAmountPrice - discount;
//     console.log(`Payable Amount : ${pay}`);
    
// }else if(ProductAmountPrice >= 2500){
//     const disCountPrice =  (ProductAmountPrice * 5 / 100);
//     const pay = ProductAmountPrice - disCountPrice;
//     console.log(`Payable Amount : ${pay}`);
    
// }



// const age = 60;
// const bill = 3000;

// if(age <= 12){
//     const discount = bill * 100 / 100;
//     const pay = bill - discount;
//     if(pay === 0){
//         console.log(`You don't have to pay money as you are a child enjoy full free service`);
        
//     }
// }else if(age >= 60){
//      const discount = bill * 50 / 100;
//     const pay = bill - discount;
//     console.log(`You are senior citizen so you get 50% discount and your payable amount is ${pay}`);
    
// }else{
//     console.log(`You are not eligible for any discount and your payable amount is ${bill}`);
    
// }


const BankBalance = 1199;

if(BankBalance < 1000){
    console.log(`Your bank balance is less than 1000, please deposit more money to continue using the services.`);
    
}else if(BankBalance >= 1000 && BankBalance < 5000){
    console.log(`Your bank balance is between 1000 and 5000, you can use basic services.`);
    
}else if(BankBalance > 5000){
    console.log(`Your bank balance is above 5000, you are rich man`);
    
}


const Amount = 3000;
const cashBack = 500;

Amount >= 3000 ? console.log(Amount - cashBack) : console.log(Amount);


const age = 15;

age > 15 ? console.log("Teenager") : console.log("Child");


const isLoggedIn = true;

isLoggedIn ? console.log('Welcome Back') : console.log("Please login");
;
