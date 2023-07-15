
    var outputScreen=document.getElementById("output-Screen");
function Display(num){
    outputScreen.value+=num;

}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid");
    }
}
function AC()
{
    outputScreen.value=" ";
}
function Delete()
{
    outputScreen.value=outputScreen.value.slice(0,-1);
}


    