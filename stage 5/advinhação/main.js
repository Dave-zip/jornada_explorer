const randomNumber = Math.round(Math.random() * 10);
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector("#screen1");
const screen2= document.querySelector('#screen2');
const inputNumber = document.querySelector('#inputNumber');
const result = document.querySelector("#result");
let xAttempts = 1

function resetClick(){
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
    xAttempts=1
}

btnTry.addEventListener('click', (e) => {
    e.preventDefault(); 

    const x = inputNumber.value 

    if (Number(x) == randomNumber) { 
        screen1.classList.add("hide"); 
        screen2.classList.remove("hide");
      
        result.innerText = `Acertou em ${xAttempts} tentativa(s)`; 
    
        console.log(`Acertou em ${xAttempts} tentativa(s)`);

    }

    inputNumber.value="";
    xAttempts++

})

btnReset.addEventListener('click',resetClick)