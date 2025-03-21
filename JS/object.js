let person = {

    name : "Saidur Rahman Setu",
    age : 16,
    location : "Dhaka",

    sayHello : function () {
        console.log('Hello world');
        
    }

}; // Object Literal


let people = {
       name : "Setu",
       age : 18,
       interest : ['JS', 'PHP', 'PYTHON'],

       add : {
        city : "Thakurgaon",
        zip : 5140
       }

}

for(let element in people){
    // console.log(people[element]);
    
}


let str = "Hello world";

let newArr = str.split(" ");

function replaceWord(str, wordToReplace, newWord){

    let arrFromStr = str.split(" ");

    let newArr = [];

    arrFromStr.forEach(element => {
        if(element == wordToReplace){
            newArr.push(newWord)
        }else{
            newArr.push(element)
        }
    });

    return newArr.join(" ");

}

console.log(replaceWord(str, 'World', "Jupiter"));
