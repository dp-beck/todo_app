//TO DO: 
// 4.) Style

import "./style.css";
import createTodoItem from "./todoFactory.js";
import { projectActions, createProject } from './projectFactory.js';
import populateStorage from './populateStorage.js';

//consts for certain divs
const currentProjectWindow = document.getElementById("current-project-window");
const projectBulletList = document.getElementById("projectBulletList");
const projectList = document.getElementById("projectList");

//code for projectArray
const projectArray = [];

//load local storage
if(window.localStorage.length !== 0) {
    const keys = Object.keys(window.localStorage);
    for (let key of keys ) {
        //take the data in local storage and use it to create a new project with those todos
        const object = JSON.parse(window.localStorage.getItem(key));
        //add the projectFactory functionality to the object
        object.addTodo = projectActions.addTodo;
        object.deleteTodo = projectActions.deleteTodo;
        projectArray.push(object);
    };
  } else {
    const defaultProject = createProject("default");
    projectArray.push(defaultProject);
  };
  
//code for tracking currently selected project
let currentlySelectedProject = projectArray[0];
const currentProjectName = document.createElement("h2");
currentProjectName.textContent = currentlySelectedProject.name;
document.getElementById("current-project-name").appendChild(currentProjectName);

//code for the to do button
document.getElementById("todo-button").addEventListener("click", function () {
    const todoInput = [
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
    ];

    const toDo = createTodoItem(...todoInput);
    eval(projectArray.find(e => e.name == document.getElementById("projectList").value)).addTodo(toDo);
    domUpdater();
    populateStorage(projectArray);
});

//code for the project adder form
document.getElementById("project-button").addEventListener("click", function () {
    const newProject = createProject(document.getElementById("projectName").value);
    projectArray.push(newProject);
    domUpdater();
    populateStorage(projectArray);
});

//run domUpdater once at start
domUpdater();

//FUNCTION THAT RUNS TO UPDATE DOM
function domUpdater() {
    //code to populate project selection
    while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
    };
    projectArray.forEach(element => {
        let option = document.createElement("option");
        option.setAttribute("value", element.name);
        option.setAttribute("id", element.name);
        option.textContent = element.name;
        document.getElementById("projectList").appendChild(option);
    });

    //code to display toDos of currentlySelected list
    currentProjectName.textContent = currentlySelectedProject.name;
    while (currentProjectWindow.firstChild) {
        currentProjectWindow.removeChild(currentProjectWindow.firstChild);
    };

    currentlySelectedProject.list.forEach(element => {
        let todoDiv = document.createElement("div");
        todoDiv.setAttribute("id", element.title);
        let title = document.createElement("h3");
        title.textContent = element.title;
        let description = document.createElement("p");
        description.textContent = element.description;
        let dueDate = document.createElement("p");
        dueDate.textContent = element.dueDate;
        document.getElementById("current-project-window").appendChild(todoDiv);
        todoDiv.appendChild(title);
        todoDiv.appendChild(description);
        todoDiv.appendChild(dueDate);

        //complete button code 
        let completeButton = document.createElement("button");
        completeButton.innerText = "Mark Completed";
        todoDiv.appendChild(completeButton);
        completeButton.addEventListener("click", function(){
            if (completeButton.innerText == "Mark Completed") {
                todoDiv.classList.add("completed");
                completeButton.innerText = "Mark Uncompleted";
            } else {
                completeButton.innerText = "Mark Completed";
                todoDiv.classList.remove("completed");
                if (element.priority == "Yes") {
                    todoDiv.classList.add("priority");
                } else {
                    todoDiv.classList.add("not-priority");
                };
            };
        });

        //delete button code
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        todoDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            currentlySelectedProject.deleteTodo(element);
            domUpdater();
            populateStorage(projectArray);
        })

        //changes styling depending on priority
        if (element.priority == "Yes") {
            todoDiv.setAttribute("class", "priority");
        } else {todoDiv.setAttribute("class", "not-priority")};

    });

    //code to display projects
    while (projectBulletList.firstChild) {
        projectBulletList.removeChild(projectBulletList.firstChild);
    };
    projectArray.forEach(element => {
        let projectNameBulletPoint = document.createElement("li");    
        projectNameBulletPoint.setAttribute("id", element.name + "bullet");
        projectNameBulletPoint.textContent = element.name;
        projectBulletList.appendChild(projectNameBulletPoint);
        projectNameBulletPoint.addEventListener("click", function(){
            currentlySelectedProject = projectArray.find(e => this.innerText == e.name + "X");
            domUpdater();
        });

        //prject deleter button
        let projectDeleteButton = document.createElement("button");
        projectDeleteButton.innerText = "X";
        projectNameBulletPoint.appendChild(projectDeleteButton);
        projectDeleteButton.addEventListener("click", function(){
            projectArray.splice(projectArray.indexOf(element), 1);
            domUpdater();
            populateStorage(projectArray);
        });
    });

}
