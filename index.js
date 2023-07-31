const buttons = document.querySelectorAll('.btn');
const inputValue = document.querySelector('.input_');
const clear = document.querySelector('.clear');
const signEquals = document.querySelector('.signEquals');

function clearInput() {
    inputValue.value = "0";
}

function handleButtonClick(event) {
    const buttonContent = event.target.textContent;
    const currentValue = inputValue.value;
    const lastChar = currentValue[currentValue.length - 1];

    if(currentValue === "0" && !isNaN(Number(buttonContent))) {

        inputValue.value = buttonContent;

    } else if(!isNaN(Number(buttonContent))) {

        inputValue.value += buttonContent;

    } else if(currentValue !== "0" && "+-*/".includes(lastChar)) {

        inputValue.value = currentValue.slice(0, currentValue.length - 1) + buttonContent;
  
    } else if(currentValue !== "0") {

        inputValue.value += buttonContent;

    }
}

// if(buttonContent === "1/x"){

//     result = 1/inputValue.value;

// }else if(buttonContent === "x^2"){

//     result = inputValue.value * inputValue.value;

// }

function Calculation(){
    const expression = inputValue.value;
    try{

        const result = eval(expression);
        inputValue.value = result;
        

    }catch(error){

        inputValue.value = "Ошибка";

    }
}

clear.addEventListener('click', clearInput);



buttons.forEach(button => {
    button.addEventListener('click', function(event){
    const buttonContent = event.target.textContent;

    if(buttonContent === "="){

        Calculation();

    }else{

        handleButtonClick(event);

    }
  });
});