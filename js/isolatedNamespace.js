let App = function(){

    let args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] == "string") ? args : args[0],
        i;

    if (!(this instanceof App)){
        return new App(modules, callback);
    }

    if(!modules || modules === "*"){
        modules = [];

        //for in, get string keys from all iterates in left parameter
        //i - is string key
        for (i in App.modules){
            if(App.modules.hasOwnProperty(i)){
                modules.push(i);
            }
        }

    }

    for(i = 0; i < modules.length; i++){
        App.modules[modules[i]](this);
    }

    callback(this);

}

App.modules = {};

App.modules.dom = function(box){
    box.createTask = function(){console.log("modules dom - created task!")}
    box.deleteTask = function(){console.log("modules dom - deleted task!")}
}

App.modules.ajax = function(box){
    box.saveTask = function(){console.log("modules ajax - saved task!")}
    box.deleteTask = function(){console.log("modules ajax - deleted task!")}
    box.loadTask = function(){console.log("modules ajax - loaded task!")}
}

App.modules.events = function(box){
    box.hoverTask = function(){console.log("modules events - hovered task!")}
}

App("ajax",function(task){
    task.saveTask();    
});