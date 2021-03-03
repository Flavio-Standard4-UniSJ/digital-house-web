let cont_inicial = 0;
let cont_final   = 60; //1 minuto
let min          = 0;
let timer;

function contador(){
    cont_inicial += 1;
    if(cont_inicial >= cont_final){
        //60 segundos
        min += 1;
        cont_inicial = 0;
    }
    document.getElementById("txtrelogio").value=min+" : "+cont_inicial;
}

function iniciar(){
    clearInterval(timer);
    timer = setInterval(contador,1000);
}

function pausar(){
    clearInterval(timer);
    document.getElementById("iniciar").innerHTML="retomar";
}

function encerrar(){
    clearInterval(timer);
    cont_inicial = 0;
}
