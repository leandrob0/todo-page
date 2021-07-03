import { myProjects } from './projects-module.js';

function checkIfValid(title) {
    if(title.length > 10) {
        return 1;
    }
    if(myProjects.checkIfRepeated(title) == true) {
        return 2;
    }

    return 0;
}

export { checkIfValid };