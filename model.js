import { classV } from "./view";

class Model {
    constructor() { }

    //function to load todo if list is found in local storage.
    loadTodo() {
        if (localStorage.getItem('todoList')) {
            classV.list.innerHTML = localStorage.getItem('todoList');
        }
    }

    //save todolist state so user can access it later
    saveElement() {
        localStorage.setItem('todoList', classV.list.innerHTML);
        alert('Your TODO Saved!');
    }

    checkElement() {
        if (classV.inputValue == '') {
            alert('Type your note');
        } else {
            classV.displayAddElement();
        }

    }
}

const classM = new Model;
export { classM };



