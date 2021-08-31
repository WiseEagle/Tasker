let App = {}

App.define = function(namespace){
    parts = namespace.split(".");
    parent = App;

    if(parts[0] == "App"){
        parts.shift();
    }

    for(let i = 0; i < parts.length; i++){
        if(parent[parts[i]] == "undefined"){
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }

    return parent;
}

let module1 = App.define("App.utils.dom");
console.log(module1);