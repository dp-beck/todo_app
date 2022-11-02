//TO DO: 
// 1.) See Small To Dos below
// 2.) Add Delete button for Projects
// 3.) CLEAN UP THIS CODE AND PUT IT INTO MODULES
// 4.) Style

import "./style.css";
import createTodoItem from "./todoFactory.js";
import createProject from './projectFactory.js';

//consts for certain divs
const currentProjectWindow = document.getElementById("current-project-window");
const projectBulletList = document.getElementById("projectBulletList");

//code for default project creation
const projectArray = [];
const defaultProject = createProject("default");
projectArray.push(defaultProject);

//code for tracking currently selected project
let currentlySelectedProject = defaultProject;
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
});

//code for the project adder form
document.getElementById("project-button").addEventListener("click", function () {
    const newProject = createProject(document.getElementById("projectName").value);
    projectArray.push(newProject);
    domUpdater();
});

//FUNCTION THAT RUNS TO UPDATE DOM
function domUpdater() {
    //code to populate project selection
    projectArray.forEach(element => {
        if (document.getElementById(element.name) == null) {
            let option = document.createElement("option");
            option.setAttribute("value", element.name);
            option.setAttribute("id", element.name);
            option.textContent = element.name;
            document.getElementById("projectList").appendChild(option);
        };
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

        //complete button code -- TO DO: MAKE REVERSIBLE
        let completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        todoDiv.appendChild(completeButton);
        completeButton.addEventListener("click", function(){
            todoDiv.setAttribute("class", "completed");
        });

        //delete button code -- TO DO: FINISH
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        todoDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", function(){
            console.log("IN PROGRESS");
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
            currentlySelectedProject = projectArray.find(e => this.innerText == e.name);
            domUpdater();
            });
    });

}