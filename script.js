const display = document.getElementById("display");

function append(input){
  display.value += input;
}

function clearD(){
  display.value = "";
}

function evaluateD(){
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error";
  }
}

