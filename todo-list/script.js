'use strict';
const addBtn = document.querySelector(".add-btn");
const newTask = document.querySelector('#wrapper input');
const taskContainer = document.querySelector('#task');
const error = document.querySelector(".error")
const countValue = document.querySelector(".count-value");

let taskCount = 0;
let taskName;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;

};

const addTask = () => {
    let taskName = newTask.value.trim();
    error.style.display = "none";
    if(!taskName) {
        setTimeout(() => {
            error.style.display = 'block'
        }, 200 );
        return;
    }

    const task = ` <div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-duotone fa-trash"></i>
    </button>
    </div>
    `;

 taskContainer.insertAdjacentHTML("beforeend", task);


 const deleteButton =  document.querySelectorAll(".delete");
 deleteButton.forEach(button => {
    button.onclick = () => {
        button.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    };
 });


 const editBtn = document.querySelectorAll(".edit");
 editBtn.forEach((editBtn) => {
    editBtn.onclick = (e) => {
        let targetElement = e.target;
        if(!(e.target.className == 'edit')) {
            targetElement = e.target.parentElement;
        }

        newTask.value = targetElement.previousElementSibling?.innerText;
        targetElement.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    };
 });
 const tasksCheck = document.querySelectorAll(".task-check");
 tasksCheck.forEach((checkBox) => {
    checkBox.onChange = () => {
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkBox.checked) {
            taskCount -= 1;

        }
        else{
            taskCount += 1;
        }
        displayCount(taskCount);
    }
 })
 taskCount += 1;
 displayCount(taskCount);
 newTask.value = ''
}



 addBtn.addEventListener("click", addTask);

 window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTask.value ="";

 }