const inquirer = require("inquirer");
const fs = require("fs");
const { acoes, cadastrar, pesquisar, listar } = require("./controle");


let listaAnimaizinhos = [];
if(! fs.existsSync("./registra-pets.json")){
    fs.writeFileSync("./registra-pets.json", JSON.stringify(listaAnimaizinhos));
}else{
    fs.readFileSync("./registra-pets.json");
}

function Animalzinho(identificador, nomeDono, nomePet, racaPet) {
    this.identificador = identificador;
    this.nomeDono = nomeDono;
    this.nomePet = nomePet;
    this.racaPet = racaPet;
}

function geradorIdUnico() {
    let idPetAleatorio = Math.random() * 1000000000000000000;
    while (listaIdPet.indexOf(idPetAleatorio) >= 0) {  // Enquanto o numero já existir, escolher outro
        idPetAleatorio = Math.random() * 1000000000000000000;
    }
    listaIdPet.push(idPetAleatorio);
    return idPetAleatorio;
}

inquirer.prompt(acoes).then( escolha =>{
    const tarefa = escolha.tarefa;
    if(tarefa==0){
        inquirer.prompt(cadastrar).then( (resposta)=>
            {
                resposta => new Animalzinho(geradorIdUnico(), resposta.nomecliente.toLowerCase(), resposta.nomepet.toLowerCase(), resposta.racapet.toLowerCase())
                console.log(`Registro para o pet ${resposta.nomepet} criado com sucesso!`)
                listaAnimaizinhos.push(resposta);
                fs.writeFileSync("./registra-pets.json", JSON.stringify(listaAnimaizinhos))
                console.log( listaAnimaizinhos );
            }
    );
    }else if(tarefa==1){
        inquirer.prompt(pesquisar).then(listaAnimaizinhos => {
            listaAnimaizinhos = fs.readFileSync("./registra-pets.json","utf-8");
            console.log(listaAnimaizinhos);
        }
        );
    }else if(tarefa==2){
        inquirer.prompt(listar).then( resposta => {
            if(resposta.listarpets){
                listaAnimaizinhos= fs.readFileSync("./registra-pets.json", "utf-8");
                console.log(listaAnimaizinhos);
            }
        });
    }
})


//console.log({ acoes, cadastrar, pesquisar, listar, alterar })