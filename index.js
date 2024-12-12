
let inputArea = document.querySelector("input");

function reset() {
    let inputArea = document.querySelector("input");
    inputArea.value = 0;
}
reset();

function del() { 

    inputArea.value = inputArea.value.slice(0, -1);  
}
del();

function num(digit){

    if (inputArea.value === 0){
        inputArea.value = digit;
    }else{
        inputArea.value +=digit
    } 
}

function ops(sign){
    if (inputArea.value === '' || /[+\-*/.]$/.test(inputArea.value)) {
        return; 
    }
        inputArea.value += sign
    }

function cal() {
    let inputArea = document.querySelector(".cal-field");  
    let anw = inputArea.value;  
    
    if (anw === "") {
        return;
    }

    try {
        
        let result = eval(anw);
        inputArea.value = result;
    } catch (e) {
        inputArea.value = "Error";
    }
}
