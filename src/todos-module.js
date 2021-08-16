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

    function saveInLocalStorage(title,desc,date,prio,pro) {
        if (typeof(Storage) !== 'undefined') {

            //CODE COPIED FROM https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
            let existingEntries = JSON.parse(localStorage.getItem("allEntries"));

            if(existingEntries === null) existingEntries = [];
            
            let entry = {
                Title: title,
                Description: desc,
                Date: date,
                Priority: prio,
                Project: pro
            }

            localStorage.setItem("entry", JSON.stringify(entry));
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        } else {
            return;
        }
    }

    return { todo , lengthArray , addToDo , removeToDo , checkIfRepeated , returnTodo , saveInLocalStorage};
})(); 

export { myTodos };