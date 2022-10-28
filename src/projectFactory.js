//a factory function for creating projects
export default function createProject(name) {
    const list = [];
    const addTodo = (e) => {
        list.push(e);
    };
    const deleteTodo = (e) => {
        if (list.indexOf(e) === -1) {console.log("ERROR");
        }
        else {
            list.splice(list.indexOf(e), 1);
        };
    };
    return {name, list, addTodo, deleteTodo}
};