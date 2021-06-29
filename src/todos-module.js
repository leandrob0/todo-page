import './style.css';
import { compareAsc, format } from 'date-fns'

const myTodos = (function() {

    let todo = [
        {
            Title: 'default',
            Description: 'default',
            Date: '',
            Priority: '',
        }
        ];

    function addToDo(title,desc,date,prio) {
        todo.push({Title: title, Description: desc, Date: date, Priority: prio});
    }

    function removeToDo(title) {
        let index = todo.indexOf(title);
        todo.splice(index, 1);
    }

    return { addToDo , removeToDo };
})(); 

export { myTodos };