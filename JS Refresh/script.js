///
var lang = "Bangla";

function learn(topic){
    lang = topic;

    //console.log(`I am learning ${topic}`);
    
}

learn("Javascript")

let language = "JS";
function res (topic){
      language = topic;
      console.log(`I am lerning ${topic}`);
       
}

res("Python");

// regular function
   function hello(){

    console.log('Hello world');
    

   }

   hello();

   // function expression
   const gello = function(){
    console.log('Hello world');
    
   }


   //named function expression
   const add = function add(){
    console.log("Hello add function");
    
   }

   add();


  // arrow function
  const arrow = () =>{
    console.log('Hello arrow function');
    
  }

  arrow();

  const arrow2 = () => {
    return {
        a : 6,
        b : 7
    }
  }

  console.log(arrow2());
   