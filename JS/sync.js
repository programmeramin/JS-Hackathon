const takeOrder = () =>{
    console.log('Taking order from customer 1');

}

const processOrder = () =>{

    // let currentTime = new Date().getTime();

    // synchronous non blocking code
//    while(currentTime + 3000 >= new Date().getTime()){
//          // delay
//    }

   setTimeout(() => {
    console.log('Cooking done');
    
   }, 3000); // ASYNCHRONOUS non-blocking code
   
   console.log("order processed for customer 1");
   

}



const completeOrder = () =>{
    console.log('Completed order for customer');

}
