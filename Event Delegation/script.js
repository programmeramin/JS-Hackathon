
const list = document.getElementById("list");

list.addEventListener(("click"), function(e){
if(e.target.matches("li")){
    if(e.target.innerText === "Javascript"){
        e.target.style.backgroundColor = "red";
    }else{
        e.target.style.backgroundColor = "blue";
    }
   
}

});
      
function addElement(){

const newElement = document.createElement("li");
newElement.textContent = ".Net"
list.appendChild(newElement);

}
