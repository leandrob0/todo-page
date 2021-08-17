import { myTodos } from './todos-module.js';

function checkIfValid(title) {
    if(title.length > 10) {
        return 1;
    }
    if(title.split('').every(elem => elem == ' ') || title == undefined) {
        return 3;
    }
    if(myTodos.checkIfRepeated(title) == true) {
        return 4; 
    }

    return 0;
}

export { checkIfValid };