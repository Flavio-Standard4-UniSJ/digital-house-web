
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

/*
app.get("/:usuario", (req, res) => {
   const { usuario } = req.params;
    return res.send(`oi  ${ usuario }`);
})

app.get('/pokemons', async (req, res) => {
    const responseAxios = await api.get(`/pokemon?limit=100&offset=200`);
    const {data} = responseAxios;
    return res.json(data);
})
*/

app.get('/pokemons', async (req, res) => {
    //const responseAxios = await api.get(`/pokemon?limit=1118&offset=0`);
    const responseAxiosPikachu = await api.get(`/pokemon/25/`);
    //const responseAxiosPineco = await api.get(`/pokemon/204/`);
    const {data} = responseAxiosPikachu;
    
    /*
    const retorno = {
        ...data,
        results:data.results.map((item, indice) => {
            if(indice % 2 == 0)
                item.saudacao = "olá";
            else
                item.saudacao = "oi";
            return item;
        })
    }//cria um novo objpokemon com const data [desestruturação] e add nova propriedade
    */
    return res.json(data);
})

app.get('/pokemons', async (req, res) => {
    res.sendFile(path.join(__dirname, "/src/views"));//join concatena caminho absoluto do dirname ao relativo no segundo argumento
});
