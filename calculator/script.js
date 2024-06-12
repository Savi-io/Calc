let outputScreen=document.getElementById("output-screen")


function appendToDisplay(num){
    outputScreen.value+=num;
}
function calculate(){
    try{
        outputScreen.value =eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid Input")
    }
}
function clearDisplay(){
    outputScreen.value=""
}
function Display(){
    outputScreen.value= outputScreen.value.slice(0,-1)
}