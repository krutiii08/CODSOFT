window.onload = function () {

const display=document.getElementById("display");

window.appendValue=function (value){
    display.value+=value;
}

window.clearDisplay=function (){
    display.value="";
}

window.cancel=function (){
    display.value=display.value.slice(0,-1);
}

window.equal=function (){
    try{
        display.value=eval(display.value);
    }catch{
        display.value="Error";
    }
}
};