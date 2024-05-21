const CarroServise = require('../services/CarroService');

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {error:'', result:[]};

        let carros = await CarroServise.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descri
            })
        }
    }
}