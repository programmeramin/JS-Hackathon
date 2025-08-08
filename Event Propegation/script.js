const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");


// event capture event bubling event trickling
parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);

button.addEventListener("click", listener, {
    capture : true,
});

function listener(event) {
    // console.log(this.tagName);
    console.log(event.currenttagName);
}