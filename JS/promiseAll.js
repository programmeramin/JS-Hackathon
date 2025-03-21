const promise1 = Promise.resolve("I am promise 1");

const promise2 = new Promise((res, rej) =>{

    const a = false;

    setTimeout(() =>{
        if(!a){
            res("I AM PROMISE 2")
        }else{
            rej(new Error("I am error from promise 2"));
        }
    }, 2000)
});


// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

Promise.all([promise1, promise2])
.then(res => console.log(res)
.catch(err => console.log(err)
)
)