# todo_app

Create a To Do List App -- Create a single page web application that provides the user an interface for creating and crossing off items on a to-do list.

Each to-do item should have a: 
    1.) title 
    2.) description 
    3.) dueDate
    4.) Priority 

The app will enable the organization of the todo items into separate lists, called projects. There will be a default project. Users will be able to create new projects and assign to do items to projects.

User Interface features: 
    1.) view all projects
    2.) view all todos in each project 
    3.) Expand a single todo to see/edit its details
    4.) Delete a todo

Include Local Storage Capabilities: Use the Web Storage API (localStorage) to save data on the user’s computer. Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. 
    1. Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!

    2. localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

Notes:

+ Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

---PSEUDOCODE---

1. Todo: Create a factory function that returns an object that has the following properties:
    a. title (a string)
    b. description (a string)
    c. due date (a date)
    d. priority (a boolean)
    e. finishedState (a boolean)

DONE
2. Create a factory function that returns an object that has the following properties and methods:
    a. name (a string)
    b. list of todos (an array)
    c. currentlySelected (a boolean)
    c. add a todo (push Todo object to the todo list)
    d. delete a todo (remove todo object from the todo list)
DONE

3. Create an interface for the user to input a new to do and attach it to the button

4. Create an interface for the user to input a new project and attach it to the button

5. Create a domUpdater [runs everytime there is a change...]
    a. Provide a button that opens up a pop-up window to add a new to-do item:
        i. set title
        ii. set description
        iii. set due date
        iv. set priority
        v. assign to a project
        vi. has a cancel or close button
    b. Display a list of the projects that have been created, displaying their name
        i. When the list gets clicked, change currentlySelected and run ToDo Display. 
        ii. Provide a button that enables you to change the list's name.
    c. Display a list of the toDos in the currently selected list
    d. For Each Todo,
        i. Provide a button to change the title.
        ii. Provide a button to change the description
        iii. Provide a button to change the due date
        iv. Provide a button to change priority setting
        v. Provide a button to change to finishedState
        vi. Provide a button to delete
4. Style last