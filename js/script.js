'use strict'

let tasks = [];

//=====================get tasks===========================================>


window.onload = function(){
    let tasksOnBoard = taskGetter(tasks);//get tasks from the page into array

    taskSaver(tasks);
    
    taskLoader();
    
    

    
    
    for(let i = 0; i < tasksOnBoard.length; i++){
        tasksOnBoard[i].onmousemove = tooltipShow;
        tasksOnBoard[i].onmouseout = tooltipHide;
    }

    console.log(tasks);

}