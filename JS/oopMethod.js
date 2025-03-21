const country = {
    name : "Bangladesh",
    capital : "Dhaka",
    language : "Bangla",

    intoduce : function(){
        const output = `The country is ${this.name} this country people mother language ${this.language}`;
        console.log(output);
        
    },

    getCapital(){
        return this.capital
    }

}


const person = {
    name : "Amin Islam",
    age : 23,
    email : "amin@gmail.com"
}

 Object.freeze(person);

Object.seal(person);

person.age = 34


