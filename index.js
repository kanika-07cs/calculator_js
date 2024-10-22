const display=document.getElementById("display");

function append(input){
    display.value+=input;
}
function clearAll(){
    display.value="";
}
function del(){
    display.value=display.value.slice(0, -1);
}
function calculate(){
    display.value=eval(display.value);
}