var imgSlider = ['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg'];
var tam = imgSlider.length;
var slideAtual = 0;
var tempoSlider;
var boxSlider = document.querySelector('.slide_img');
function mudarImagem(){
    slideAtual = slideAtual + 1;
    if(slideAtual >= tam){ 
        slideAtual = 0;
    }
    boxSlider.style.backgroundImage="url('"+imgSlider[slideAtual]+"')";
}
function iniciaSlider(){
    boxSlider.style.backgroundImage="url('"+imgSlider[slideAtual]+"')";
    tempoSlider = setInterval(mudarImagem, 1000);
}
function troca(imagem){
    slideAtual += imagem;
    if(slideAtual < 0) {
        slideAtual = 2; 
    }
    else if(slideAtual >= tam) {
        slideAtual = 0;
    }
    boxSlider.style.backgroundImage="url('"+imgSlider[slideAtual]+"')";
    clearInterval(tempoSlider);
    tempoSlider = setInterval(mudarImagem, 1000);
}

let senha = document.getElementById('senha')
let senhaConfirma = document.getElementById('confirma-senha')
function validarSenha(){
    if(senha.value != senhaConfirma.value){
        senhaConfirma.setCustomValidity("senhas diferentes")
        senhaConfirma.reportValidity()
        return false
    }else{
        senhaConfirma.setCustomValidity("");
        return true;
    }
}
senhaConfirma.addEventListener('input', validarSenha)