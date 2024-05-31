const display=document.getElementById("display")

function addtodisplay(input){
    display.value+=input
}

function clearscreen(){
    display.value='';
}
function deletel(){
    display.value=display.value.slice(0,-1)
}
function calc()
{
    display.value=eval(display.value)
}
function calc(){
try{
    display.value=eval(display.value);
}
catch(error)
{
    display.value='Invalid';
}
}
