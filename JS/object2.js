

// Factory functiooon

function createPerson(name, age){

    return {
        name,
        age,
        sayHello() {
            console.log('Hello world');
            
        }
    }

}

let person = createPerson("Amin", 33);
person.addr = "manikganj";

console.log(person.age);


// Class Based Object
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.heyHello = function() {
            console.log('Hello');
            
        }
    }
}

let person2 = new Person("Amin", 32)


// console.log(person2.heyHello());


// Rest Parameter

function add(num1, num2, ...nums){
    
}