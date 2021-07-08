import { compareAsc, format } from 'date-fns'

const myTodos = (function() {

    let todo = [];

    function addToDo(title,desc,date,prio,pro) {
        todo.push({Title: title, Description: desc, Date: date, Priority: prio, Project: pro});
    }

    function removeToDo(title) {
        let index = todo.indexOf(title);
        todo.splice(index, 1);
    }

    function lengthArray() {
        return todo.length;
    }

    function checkIfRepeated(title) {
        for(let i = 0; i < todo.length; i++) {
            if(todo[i]['Title'] == title) {
                return true;
            }
        }
        return false;
    }

    function returnTodo(index) {
        return todo[index];
    }

    return { todo , lengthArray , addToDo , removeToDo , checkIfRepeated , returnTodo};
})(); 

export { myTodos };