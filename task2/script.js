const inputBox= document.querySelector(".input input");
const addbtn=document.querySelector(".input button");
const todo=document.querySelector(".todo");
const deleteAll=document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let enteredValue = inputBox.value;
    if (enteredValue.trim() != 0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
}
 
showtasks();
//adding tasks
addbtn.onclick = ()=>{
    let enteredValue=inputBox.value;
    let getLocalStorage=localStorage.getItem("new todo");
    if(getLocalStorage == null)
    {
        l=[];
    }
    else{
        l=JSON.parse(getLocalStorage);
    }
    l.push(enteredValue);
    localStorage.setItem("new todo",JSON.stringify(l));
    showtasks();
    addbtn.classList.remove("active");
}
//tasks showing
function showtasks(){
    let getLocalStorage=localStorage.getItem("new todo");
    if(getLocalStorage == null)
    {
        l=[];
    }
    else{
        l=JSON.parse(getLocalStorage);
    }
    const pendingTasksNumb = document.querySelector(".pending");
  pendingTasksNumb.textContent = l.length; 
  if(l.length > 0){ 
    deleteAll.classList.add("active"); 
  }else{
    deleteAll.classList.remove("active"); 
  }
  let newLi = "";
  l.forEach((element, index) => {
    newLi += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todo.innerHTML=newLi;
  inputBox.value="";

}
//delete/
function deleteTask(index)
{
  let getLocalStorage = localStorage.getItem("new todo");
  l=JSON.parse(getLocalStorage);
  l.splice(index,1);
  localStorage.setItem('new todo',JSON.stringify(l));
  showtasks();
}

//deleteall

deleteAll.onclick=()=>{
    l=[];
    localStorage.setItem("new todo",JSON.stringify(l));
    showtasks();
}
