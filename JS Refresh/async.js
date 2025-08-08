

// async function always return promise

async function  getData(){
    try{
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await result.json();
    console.log(data.title);
    
}catch(err){
  
}
}

function bigWork(){
    return getData();
}

(async function () {
    const result = await bigWork();
})();

console.log('need to use the response');
