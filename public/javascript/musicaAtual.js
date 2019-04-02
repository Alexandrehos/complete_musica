var resetButton = document.getElementById("reset"),
    solutionButton = document.getElementById("solution"),
    respostasInputs = document.querySelectorAll("input")
function acertou(palavra){
    var palDigitada = document.getElementById(palavra).value,
        caixaTexto = document.getElementById(palavra);
    if(palDigitada.toUpperCase() === palavra.toUpperCase()){
        caixaTexto.classList.remove("errado");
        caixaTexto.classList.add("acertou");
    } else {
        caixaTexto.classList.remove("acertou");
        caixaTexto.classList.add("errado");
    }
}
resetButton.addEventListener("click", function(){
   console.log("reset pressionado")
   clearAll();
});
solutionButton.addEventListener("click", function(){
   console.log("solution pressionado");
   solutionAll();
});
function clearAll(){
    for(var i = 0; i< respostasInputs.length; i++){
        respostasInputs[i].removeAttribute("disabled")
        respostasInputs[i].value="";
        respostasInputs[i].classList.remove("acertou");
        respostasInputs[i].classList.add("errado");
    }
}
function solutionAll(){
    for(var i = 0; i< respostasInputs.length; i++){
        respostasInputs[i].value = respostasInputs[i].id
        respostasInputs[i].classList.remove("errado");
        respostasInputs[i].classList.add("acertou");
        respostasInputs[i].setAttribute("disabled", "disabled")
    }
}