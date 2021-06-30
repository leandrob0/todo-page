import { compareAsc, format } from 'date-fns'

const myTodos = (function() {

    let todo = [
        {
            Title: 'default',
            Description: 'default',
            Date: '2021',
            Priority: 'High',
            Project: 'Hello',
        }
        ];

    function addToDo(title,desc,date,prio,pro) {
        todo.push({Title: title, Description: desc, Date: date, Priority: prio, Project: pro});
    }

    function removeToDo(title) {
        let index = todo.indexOf(title);
        todo.splice(index, 1);
    }

    return { todo , addToDo , removeToDo };
})(); 

export { myTodos };