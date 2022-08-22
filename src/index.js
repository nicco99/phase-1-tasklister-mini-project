document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
let form = document.querySelector("#create-task-form");
form.addEventListener("submit", (e)=> {
e.preventDefault();

let btn = document.querySelector("#button")
btn.addEventListener("click", createToDoList)
})


});


function createToDoList() {
  let li = document.createElement("li");
  let btn2 = document.createElement("button")
  btn2.addEventListener("click", deleteElement)
  btn2.innerText = " x"
  let message = document.querySelector("#new-task-description").value;
  li.innerText = message;
  li.appendChild(btn2);
  let ul = document.querySelector("#tasks");
  ul.appendChild(li);

  function deleteElement () {
li.remove()
  }
}


