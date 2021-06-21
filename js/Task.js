'use strict'

let Task = function(id, content, bgColor, status){
    this.id = id;
    this.content = content;
    this.color = bgColor;
    this.status = status;
}
//Writing task into database
Task.prototype.writeTaskIntoDB = function(){
    console.log("task is writing now into db...");
}
//Reading task from database
Task.prototype.readTaskFromDB = function(){
    console.log("task is reading now from db...");
}
//Printing task into view area
Task.prototype.printTaskInArea = function(){
    console.log("task is writing now into site area...");
}
//Adding new task
Task.prototype.addNewTask = function(){
    console.log("adding new task...");
}