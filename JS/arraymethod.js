let arr = [1, 2, 3, 4, 5, 6];

let newArr = [];

arr.map((ele, index, arr) =>{
    if(ele % 2 == 0){
        //console.log(ele);
        
    }
});


const characters = [
    {
        name : "MAZDA",
        height : "233",
        mass : 23,
        eye_color : "blue",
        gender : "male",
    },

    {
        name : "Darth vader",
        height : "233",
        mass : 28,
        eye_color : "yellow",
        gender : "male",
    },

    {
        name : "Luke SRyder",
        height : "233",
        mass : 123,
        eye_color : "blue",
        gender : "male",
    },

]

const mapfun = characters.map((ele, index) =>{
   // console.log(ele.name.split(" "));
    return {
        name : ele.name,
        height : ele.height
    }
})          

//console.log(mapfun);

// get character with mass greater than 100

let greaterThan100 = characters.filter((ele) =>{
    return ele.mass > 100
})

// console.log(greaterThan100);

const name = {
    name : "Amin islam",
    age : "32",

    sayHello : function(){
        //console.log( "Hello " + this.name + "You age is" + this.age);
        
        return "Hello " + this.name + "Your age is " + this.age

    }
}

// console.log(name.sayHello());


// sort method 

const sorMethod = [1, 2,4,5,6,3,7, 34,67,23,63,65,65,23];

// console.log(sorMethod.sort((a,b) => a - b));

// console.log(sorMethod.sort((a,b) => b - a));


const sortArray = ["Banana", "Apple", "Orange", "Mango", 'Guava'];

let sortend = sortArray.sort((a, b) => a - b);

// console.log(sortend);

// reduce method
let array = [1, 2, 3, 4, 5, 6];

let sum = array.reduce((acc , ele , ind, arr) =>{
   return acc + ele;
}, 10)

// console.log(sum);

// Get the total mass all characters

let totalMass = characters.reduce((acc, ele) =>{
    //return acc += ele.mass
    return acc + Number(ele.height)
}, 0);

//console.log(totalMass);

let totalChar = characters.reduce((acc, ele) =>{
    return acc += Number(ele.name.length);
}, 0)

//console.log(totalChar);


let str = "Hello World";

let split = str.split(" ").join("").length

//console.log(split);

// Get the total number of characters by eye color (hint a map of eye color to count)

let eyeColor = characters.reduce(function(acc,ele, ind){
       if(acc[ele.eye_color]){
         acc[ele.eye_color]++
       }else{
        acc[ele.eye_color] = 1
       }
       return acc
},  {})

console.log(eyeColor);



// in which data how much have

let string = "Hello World";

let count = string.split("").reduce(function(acc, ele){
    if(ele != ""){
        if(acc[ele]){
            acc[ele]++
        }else{
            acc[ele] = 1;
        }
    }
    return acc
}, {});


console.log(count);
