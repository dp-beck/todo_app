//Factory function for creating to-do objects
export default function createTodoItem(title, description, dueDate, priority, finishedState) {
    return {title, description, dueDate, priority, finishedState};
}