
//get tasks from the page into array
let taskGetter = function(t){
    let some = document.getElementsByClassName("task");

    for(let i = 0; i < some.length; i++){
        t[i] = new Task(parseInt(some[i].dataset.id), some[i].innerHTML.trim(), getElementColor(some[i]), some[i].dataset.status);
    }

    return some;
}

let getElementColor = function(elem) {
    console.log(`== *** ==`);
    /* check stytle attribute of element */
    if(elem.style.backgroundColor != ""){
        console.log(`== elem.style.backgroundColor ${elem} - ${elem.style.backgroundColor} ==`);
        return elem.style.backgroundColor;
    }
    /* for IE or old browsers */
    else if(elem.currentStyle){
        console.log(`== currentStyle ${elem} - ${elem.currentStyle["backgroundColor"]} ==`);
        return elem.currentStyle["backgroundColor"];
    }else if(window.getComputedStyle){/* for new browsers */
        console.log(`== getComputedStyle ${elem} - ${window.getComputedStyle(elem,null)["backgroundColor"]} ==`);
        return window.getComputedStyle(elem,null)["backgroundColor"];
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
       // return response.json();
    });

    console.log("loading changes!...");
}

//pain task, move task
let paintTask = function(taskElement){
    //console.log("paint start");
    
    let moveTask = function(e){
        if(!e) e = window.event;
        //console.log("task moved");

        taskElement.style.position = "absolute";
        taskElement.style.left = (e.clientX - 25) + "px";
        taskElement.style.top = (e.clientY - 25) + "px";
        taskElement.style.width = "60px";
        taskElement.style.height = "60px";
        taskElement.style.boxSizing = "border-box";
        taskElement.style.borderRadius = "50%";
        taskElement.style.overflow = "hidden";

        
        for(let i = 0 ; i < stickerColors.length; i++){
            if(e.clientX > stickerColors[i].offsetLeft 
                && e.clientX < stickerColors[i].offsetLeft+60
                && e.clientY > stickerColors[i].offsetTop 
                && e.clientY < stickerColors[i].offsetTop+60){
                console.log(stickerColors[i].style.backgroundColor);
                taskElement.style.backgroundColor = stickerColors[i].style.backgroundColor;
            
            }
        }
    }

    let dropTask = function(){
        //console.log("Task dropped");
        document.removeEventListener("mouseup", dropTask, true);
        document.removeEventListener("mousemove", moveTask, true);
        let bgTemp = taskElement.style.backgroundColor;
        taskElement.removeAttribute("style");
        taskElement.style.backgroundColor = bgTemp;
    }
    
    
    document.addEventListener("mousemove", moveTask, true);
    document.addEventListener("mouseup", dropTask, true);
        
    
}