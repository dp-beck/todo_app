export default function domUpdater() {
    //code to populate project selection
    projectArray.forEach(element => {
        let option = document.createElement("option");
        option.setAttribute("value", element.name);
        option.textContent = element.name;
        document.getElementById("projectList").appendChild(option);
    });

    //code to display toDos of currentlySelected list

    //code to display projects
    const currentProjectName = document.createElement("h2");
    currentProjectName.textContent = ;
}