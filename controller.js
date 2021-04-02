import { classV } from './view.js';
import { classM } from './model.js';

class Controller {
    constructor() { }

    contentLoader() {
        //on click button 'add' newElement()
        classV.addButton.addEventListener('click', classM.checkElement);

        //on click button 'save' saveElement()
        classV.saveButton.addEventListener('click', classM.saveElement);

        document.addEventListener('DOMContentLoaded', () => {
            classM.loadTodo();
            classM.crossedOut();
        });
    }

    crossedOut() {
        classV.list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked');
            } else if (event.target.tagName === 'SPAN') {
                let div = event.target.parentNode;
                div.remove();
            }
        }, false);
    }

}


const classC = new Controller;
document.body.onload = () => {
    classC.contentLoader();
    classC.crossedOut();
}

export { classC };