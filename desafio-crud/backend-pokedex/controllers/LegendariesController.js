const LegendariesService = require('../services/LegendariesService');
const legendaries = './legendaries.json';

const fs = require('fs');

let readFile = fs.readFile(legendaries, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    let listaLegendaries = JSON.parse(data);
    console.log(listaLegendaries);
});


const controller = {
    index: (req, res) => {
        readFile = fs.readFile(legendaries, 'utf8', function (err, data){
            if (err) {
				return console.log(err);
			}
            
            console.log('-------- http://localhost:8000/legendaries ---------');
            console.log('-------- http://localhost:8000/legendaries?name=xyz ---------');
            listaLegendaries = JSON.parse(data);
            console.log(listaLegendaries);
            return res.json(listaLegendaries);
       });
    },
    indexLegendary: (req, res) => {
        const { id } = req.query;
        readFile = fs.readFile(legendaries, 'utf8', function (err, data) {
			if(err) {
				return console.log(err);
			}
            let listaLegendaries = JSON.parse(data);
            let legendaryFilter = listaLegendaries.filter((item) => item.id == id);

			if(legendaryFilter.length == 0) {
				return res.status(400).send(`O pokemon não está na lista!`);
			}else {
                console.log('-------- http://localhost:8000/legendaries/195001 ---------');
				console.log(legendaryFilter);     
                return res.json(listaLegendaries);
			}
        });
    },
    create: (req, res) => {
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense,
            urlFoto
        } = req.body;
        const legendary = LegendariesService.createLegendary(
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense,
            urlFoto
        );
        readFile = fs.readFile(legendaries, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            let listaLegendaries = JSON.parse(data);
            listaLegendaries.push(legendary);
            let newLegendariesString = JSON.stringify(listaLegendaries, null, 2);
            fs.writeFileSync(legendaries, newLegendariesString, (err) => {
                if (err) {
                    console.error(err);
                }
                console.log(req.body);
            });
            return res.json(legendary);
        });
    },
    update: (req, res) => {
        readFile = fs.readFile(legendaries, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}

            const { id } = req.params;
            const {
                name,
                description,
                type,
                healthPoints,
                specialAttack,
                defense,
                attack,
                experience,
                specialDefense,
                urlFoto
            } = req.body;

            let listaLegendaries = JSON.parse(data);

            let legendaryFilter = listaLegendaries.findIndex((item) => item.id == {id});

			if (legendaryFilter == -1) {
				return res.status(400).send(`O pokemon de id ${id} não está na lista`);
			}else{
                for(let pokemon of readFile){
                    for(let legendary in pokemon){
                        if(pokemon[legendary].id===data.id){
                            console.log(pokemon[legendary]);
                        }
                    }
                }
                let newLegendariesString = JSON.stringify(listaLegendaries, null, 2);
                    fs.writeFileSync(legendaries, newLegendariesString, (err) => {
                        if (err) {
                           return console.error(err);
                        }
                    });
                return res.json(listaLegendaries[legendaryFilter]);
            }
        });
    },
    excluir: (req, res) => {
        readFile = fs.readFile(legendaries, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}

            const { id } = req.params;
            console.log(id);
            const {
                name,
                description,
                type,
                healthPoints,
                specialAttack,
                defense,
                attack,
                experience,
                specialDefense,
                urlFoto
            } = req.body;

            let listaLegendaries = JSON.parse(data);

            let legendaryFilter = listaLegendaries.findIndex((item) => item.id == { id });
            if (legendaryFilter == -1) {
				return res.status(400).send(`O pokemon ${ id } não está na lista!`);
			}else {
               	let deletarLegendaries = listaLegendaries.splice(legendaryFilter + 1, 1);

				let LegendariesString = JSON.stringify(listaLegendaries, null, 2);

                fs.writeFileSync(legendaries, LegendariesString, (err) => {
                    if (err) {
                       return console.error(err);
                    }
                });
                console.log(listaLegendaries);
                return res.json(deletarLegendaries);
            }
        });
    }
}

module.exports = controller;