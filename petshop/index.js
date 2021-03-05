const inquirer = require("inquirer");
const fs = require("fs");
const { acoes, cadastrar, pesquisar, listar } = require("./controle");

var identificador;
var listaIdPet = [];
var listaAnimaizinhos = [];

function Animalzinho(identificador, nomePet, racaPet, donoPet) {
    this.identificador = identificador;
    this.nomepet = nomePet;
    this.racapet = racaPet;
    this.nomedono = donoPet;
}

var registraPets = JSON.parse(fs.readFileSync('./registraPets.json' , 'utf-8'));
identificador = registraPets.listaAnimaizinhos[registraPets.listaAnimaizinhos.length-1].identificador

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
        inquirer.prompt(cadastrar).then( resposta =>
            {
                resposta  = new Animalzinho(geradorIdUnico(), resposta.nomepet, resposta.racapet, resposta.donopet)
                registraPets.listaAnimaizinhos.push(resposta)
                fs.writeFileSync("./registraPets.json", JSON.stringify(registraPets,null,2))
                console.log( registraPets.resposta );
            }
    );
    }else if(tarefa==1){
        inquirer.prompt(pesquisar).then(resposta => {
          
            registraPets = JSON.parse(fs.readFileSync("./registraPets.json","utf-8"));
            for(let animais of registraPets.listaAnimaizinhos){
                for(let animal in animais){
                    if(animais[animal]==resposta.nomepet)
                        console.log(animais)

                        //console.log(animais[animal])
                   
                }
            }
        }
        );
    }else if(tarefa==2){
        inquirer.prompt(listar).then( resposta => {
            if(resposta.listarpets){
                registraPets = JSON.parse(fs.readFileSync("./registraPets.json","utf-8"));
                console.log(registraPets);
            }
        });
    }
})
