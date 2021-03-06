const myTodos = (function() {
    /*

    THE MISTAKES WERE DONE BY FIRST STARTING TO WORK WITH A LOCAL ARRAY
    AND THEN TRYING TO WORK WITH LOCAL STORAGE WHEN I NEVER USED IT :)

    WORKING DIRECTLY WITH LOCAL STORAGE INSTEAD OF USING THIS LOCAL ARRAY : let todo = [];
    MADE EVERYTHING EASIER AND ALL THANKS TO THE STACKOVERFLOW QUESTION I PASTED BELOW.

    */
    function removeToDo(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        let index = todos.indexOf(title);
        todos.splice(index, 1);
        localStorage.setItem("allEntries", JSON.stringify(todos));
    }

    function findToDo(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        let index = todos.indexOf(title);
        return index;
    }

    function removeToDos(projectName) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) todos = [];
        
        todos.map((object,i) => {
            if(object['Project'] === projectName) todos.splice(i,1);
        });

        localStorage.setItem("allEntries", JSON.stringify(todos));
    }

    /* FUNCTION TO BE IMPLEMENTED
    function editTodo(prop, content, index) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));

        todos[index][prop] = content;

        localStorage.setItem("allEntries", JSON.stringify(todos));
    }
    */

    function checkIfRepeated(title) {
        let todos = JSON.parse(localStorage.getItem("allEntries"));
        if(todos === null) {
            todos = [];
        }
        for(let i = 0; i < todos.length; i++) {
            if(todos[i]['Title'] == title) {
                return true;
            }
        }
        return false;
    }

    function saveInLocalStorage(title,desc,date,prio,pro) {
        if (typeof(Storage) !== 'undefined') {

            // CODE COPIED FROM https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
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

    return { removeToDo , findToDo , removeToDos , checkIfRepeated , saveInLocalStorage};
})(); 

export { myTodos };