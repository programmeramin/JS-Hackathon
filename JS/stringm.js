// string method split()

let split = "Hello world";

let split1 = split.split(" ");
let split2 = split.split(" ");




// string method replaceAll

let text = "I love cats. Cats are very easy to love. Cats are very popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");



// string method replace();

function myFunction() {

    let text = 'Please visit Microshoft';

    let replace = text.replace("Microshoft", "W3Scholls")    
   console.log(replace);
   
}

myFunction();