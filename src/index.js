import "./style.css";
import createTodoItem from "./todoFactory.js";
import createProject from './projectFactory.js';
import domUpdater from './domUpdater.js';

//code for default project creation
const projectArray = [];
const defaultProject = createProject("default");
projectArray.push(defaultProject);

//code for tracking currently selected project
let currentlySelectedProject = defaultProject;

//code for the to do button
document.getElementById("todo-button").addEventListener("click", function () {
    const todoInput = [
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value
    ];

    const toDo = createTodoItem(...todoInput);
    eval(document.getElementById("projectList").value).addTodo(toDo);
    //run domUpdater
});

//code for the project adder form
document.getElementById("project-button").addEventListener("click", function () {
    projectArray.push(createProject(document.getElementById("projectName").value));
    console.log(projectArray);
    //run domUpdater
});