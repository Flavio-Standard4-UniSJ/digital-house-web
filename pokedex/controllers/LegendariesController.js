const legendariesServices = require("../services/legendariesServices");

const controller = {
    index: (req, res)=>{
        const legendary = legendariesServices.listaLegendaries();
        return res.json(legendary);
        //return res.send("carregar pagina legendaries");
    }
}

module.exports=controller;