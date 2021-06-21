'use strict'

let tasks = [];

//=====================get tasks===========================================>
taskGetter(tasks);//get tasks from the page into array

taskSaver(tasks);

taskLoader();

console.log(tasks);