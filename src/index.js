import "./style.css";
import createTodoItem from "./todoFactory.js";
import createProject from './projectFactory.js';

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
    domUpdater();
});

//code for the project adder form
document.getElementById("project-button").addEventListener("click", function () {
    projectArray.push(createProject(document.getElementById("projectName").value));
    domUpdater();
});

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
    const currentProjectName = document.createElement("h2");
    currentProjectName.textContent = currentlySelectedProject.name;
    currentlySelectedProject.list.forEach(element => {
        let todoDiv =  document.createElement("div");
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
        //TODO: 1) Change Color if Priority
        //TODO: 2) Add button to change priority
        //TODO: 3. Add button to select as finished
    });

    //code to display projects
    projectArray.forEach(element => {
        if (document.getElementById(element.name + "bullet") == null) {
            let projectNameBulletPoint = document.createElement("li");    
            projectNameBulletPoint.setAttribute("id", element.name + "bullet");
            projectNameBulletPoint.textContent = element.name;
            document.getElementById("projectBulletList").appendChild(projectNameBulletPoint);
        };
    });

}