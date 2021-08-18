/*
*
**
NO TERMINAL ENTRAR NA PASTA E INICIAR PROJETO :npm init -y 
INSTALAR EXPRESS : npm install --save express
INSTALAR AXIOS : npm install --save axios
API : https://pokeapi.co/
**
ROTA USUARIOS: localhost/usuarios
ROTA USUARIO ESPECÍFICO: localhost:3000/hello/nome_do_usuario
**
*
*/
const express = require('express');
const axios = require('axios');
const app = express();

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

const listaUsuarios = [
    'Ivens',
    'Jailson',
    'Maria',
    'Natalia',
    'Ariel',
    'Nykolle',
    'Flavio'
]

// Query Params
// Ex: localhost:3000/usuarios?nome=Ivens
app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i.includes(nome || ''));
    return res.json(listaRetorno);
});

// Route Params 
// Ex: ecommer.com.br/produtos/4/detalhes
app.get('/hello/:usuario', (req, res) => {    
    const { usuario } = req.params;
    return res.send(`Viva Jesus ${usuario}`);
});

app.get('/listar-pokemon', async (req, res) => {
    const responseAxios = await api.get('pokemon?limit=100&offset=200');
    const { data } = responseAxios;
    const retorno = {
        ...data,
        results: data.results.map(item => {
            item.greetings = 'Olá';
            return item;
        })
    }
    return res.json(retorno);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});