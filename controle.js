const inquirer = require("inquirer");

const acoes = [
    {
        type: "list",
        name: "tarefa",
        message: "Qual tarefa realizar?",
        choices: [
            {
                name: "cadastrar animalzinho",
                value: 0
            },
            {
                name: "pesquisar animalzinho por nome",
                value: 1
            },
            {
                name: "listar animaizinhos",
                value: 2
            }
        ]
    }
]

const cadastrar = [
    {
        type: "input",
        name: "donopet",
        message: "nome do dono do pet?",
        required: true
    },
    {
        type: "input",
        name: "nomepet",
        message: "nome do pet?",
        required: true
    },
    {
        type: "input",
        name: "racapet",
        message: "qual a raça do pet?",
        required: true
    }
]
const pesquisar = [
    {
        type: "input",
        name: "nomepet",
        message: "nome do pet?",
        required: true
    }
]

const listar = [
    {
        type: "confirm",
        name: "listarpets",
        message: "listar pets?",
        default: true
    }
]

module.exports = { acoes, cadastrar, pesquisar, listar }