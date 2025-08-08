const user = {
    id : 333,
    name : "Sumit",
    age : 23,
    education : {
        degree : "Graduate",
        school : {
            name : "Rangpur zilla school"
        }
    }

}


// const {name, age} = user;
// const {degree} = user.education;
const {education : {degree}} = user;
const {education : {school : name} = {} } = user

console.log(name);

// other wise to destructure take name
console.log(user?.education?.school?.name)
