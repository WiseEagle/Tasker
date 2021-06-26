let Tooltip = function(){
    this.tooltip = document.createElement("div");
    this.tooltip.style.visibility = "hidden";
    this.tooltip.style.position = "absolute";
    this.tooltip.className = "tooltip";


}
Tooltip.prototype.show = function(text, x, y){
    this.tooltip.innerHTML = text;
    this.tooltip.style.visibility = "visible";
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";

    if(this.tooltip.parentNode != document.body){
        console.log("this.tooltip.parentNode != document.body")
        document.body.appendChild(this.tooltip);
    }else{
        console.log("some bad");
    }
}

Tooltip.prototype.hide = function(){
    this.tooltip.style.visibility = "hidden";
}

let t = new Tooltip();

let description = "to add a category to this task move her into colored circle. After this task get category color. And after we can change name for color.";

let tooltipShow = function(e){
    if (!e) e = window.event;
    t.show(description, e.clientX + 10, e.clientY + 10);
}

let tooltipHide = function(){
    t.hide();
}