const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);


fetchPromise.then((res) =>{
    if(!res.ok){
      throw new Error(`response error: ${res.status}`)
    }

    return res.json()
}).then((res) =>{
  console.log(`Product: ${res[0].name}`);
  
}).catch((error) =>{
   console.log(`Could not get product ${error}`);
   
})













fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
