const takeOrder = (customer, callback) =>{
    console.log(`Processing order from ${customer}`);
    callback(customer);
    
};


const processOrder = (customer, callback) =>{
    console.log(`processing order from ${customer}`);
    
       setTimeout(() => {
          console.log(`cooking done`);
          console.log(`order processed for ${customer}`);
          callback(customer)
          
       },3000);
};


const completeOrder = (customer) =>{
    console.log(`completed order for ${customer}`);
    
};


takeOrder("Customer 1", (customer) =>{
    processOrder(customer, (customer) =>{
        completeOrder(customer);
    });
});


console.log('I am in!');
