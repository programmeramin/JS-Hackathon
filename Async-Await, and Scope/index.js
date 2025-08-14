function delay(i){
    return new Promise(resolve =>{
       setTimeout(() => {
       resolve(`Promise resolve succesfull ${i} ✅`)
    }, i * 100);
    })
}

async function Timer(n){

  console.log("Start Timer");
  
  for(let i = 0; i <= n; i++){
     const result = await delay(i);
     console.log(result);
     
  }
    console.log("End Timer");
    
}

Timer(5)

// Promise function

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then((responses) =>{
    for(const response of responses){
      //  console.log(` ${response.url} : ${response.status}`);
        
    }
}).catch((error) =>{
   // console.log(`Error fetch : ${error}`);
    
})



