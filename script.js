const inputBox = document.querySelector('#input-container input');
const addBtn = document.querySelector('#input-container #new-task-submit');
const todoList = document.querySelector('.todo-list');
const deleteAllBtn = document.querySelector("#footer #new-task-submiti ");


inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    } else{
        addBtn.classList.remove("active");
        
    }
}
 
showtask(); 

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("nova tarefa");
    if(getLocalStorage == null ) {
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
 
    listArr.push(userData);
    localStorage.setItem("nova tarefa" , JSON.stringify(listArr));
    showtask(); 
    addBtn.classList.remove("active");
}

function showtask(){
    let getLocalStorage = localStorage.getItem("nova tarefa");
    if(getLocalStorage == null ) {
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '' ;
    listArr.forEach((element , index) => {
        newLiTag += ` <li>${element}<span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("nova tarefa");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index , 1);
    localStorage.setItem("nova tarefa" , JSON.stringify(listArr));
    showtask();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("nova tarefa" , JSON.stringify(listArr));
    showtask();

}