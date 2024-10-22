const display=document.getElementById("display");

function append(input){
    display.value+=input;
}
function clearAll(){
    display.value="";
}
function clear(){

}
function calculate(){
    display.value=eval(display.value);
}