
//get tasks from the page into array
let taskGetter = function(t){
    let some = document.getElementsByClassName("task");

    for(let i = 0; i < some.length; i++){
        t[i] = new Task(parseInt(some[i].dataset.id), some[i].innerHTML.trim(), some[i].style.backgroundColor, some[i].dataset.status);
    }
}

//saver for unsaved tasks
let taskSaver = function(t){
    for(let i = 0; i < t.length; i++){
        console.log(t[i].status);
        if(t[i].status == "new"){
            t[i].writeTaskIntoDB();
        }
    }
}

//task loader from DB
let taskLoader = function(){
    
    fetch('http://tasks.reasavings.top/module/getTasks.php',
        {mode: 'no-cors'}
    )
    .then((data) => {
        console.log(data);
    })
    .then((response) => {
        return response.json();
    });

    console.log("loading changes!...");
}