//a factory function for creating projects
const projectActions = {
    addTodo(e) {
        this.list.push(e);
    },
    deleteTodo(e) {
        if (this.list.indexOf(e) === -1) {console.log("ERROR");
        }
        else {
            this.list.splice(this.list.indexOf(e), 1);
        };
    }
};

function createProject(name) {
    let project = Object.create(projectActions);
    project.list = [];
    project.name = name;    
    return project;
}

export { projectActions, createProject };