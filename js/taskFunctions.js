
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