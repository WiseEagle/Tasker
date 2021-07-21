'use strict'

let tasks = [];



let App = {};//create tasker namespace
App.tasksInfo = []; //object whith tasks info
App.tasksOnBoard = []; //dom (task) elements on board
App.getTasksFromBoard = function(taskClass){
    this.tasksOnBoard = document.getElementsByClassName(taskClass);
}
App.getTasksInfo = function(){
    for(let i = 0; i < this.tasksOnBoard.length; i++){
        this.tasksInfo[i] = new Task(parseInt(this.tasksOnBoard[i].dataset.id), this.tasksOnBoard[i].innerHTML.trim(), getElementColor(this.tasksOnBoard[i]), this.tasksOnBoard[i].dataset.status);
    }
}
App.saveTasks = function(){
    for(let i = 0; i < this.tasksInfo.length; i++){
        if(this.tasksInfo[i].status == "new"){
            this.tasksInfo[i].writeTaskIntoDB();
        }
    }
}
App.loadTasks = function(){
    
    fetch('http://tasks.reasavings.top/module/getTasks.php',
        {mode: 'no-cors'}
    )
    .then((data) => {
        console.log(data);
    })
    .then((response) => {
       // return response.json();
    });

    console.log("loading changes!...");
}

//=====================get tasks===========================================>

window.onload = function(){
    App.getTasksFromBoard("task")//get tasks from the page into array by class name
    App.getTasksInfo();//get tasks info into tasks object
    
    App.saveTasks();//save tasks functionality into db
    
    App.loadTasks();//load tasks functionality from db
    
    for(let i = 0; i < App.tasksOnBoard.length; i++){
        App.tasksOnBoard[i].onmousemove = tooltipShow;
        App.tasksOnBoard[i].onmouseout = tooltipHide;
    }

    for(let i = 0 ; i < App.tasksOnBoard.length; i++){
        //добавляем обработчик на зажатие клавиши
        App.tasksOnBoard[i].addEventListener("mousedown", () => paintTask(App.tasksOnBoard[i]));
    }
    
    console.log(App.tasksInfo);
}