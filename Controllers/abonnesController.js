const { abonnesdb } = require('../db/db');
const Abonnes = require('../Models/abonnes')

const getAll = (req,res) => {
    try{   
        const all = Abonnes.getAll();
        res.status(200).send(all)
    }
    catch(err) {
        res.status(500).json({err:err})
    }

}
const getOneAbonne = (req,res) => {
    
    try{
        const {id} = req.params;
        const abonne = Abonnes.getOneAbonne(id);
        res.status(200).send(abonne);
    }
    catch(err) {
        res.status(500).json({err:err.message})
    }

}
const addAbonne = (req,res) => {
    const {id,typeAbonnement,dureeEnMois} = req.body;
    if(!id || !typeAbonnement || !dureeEnMois) res.status(500).json({err : "All data required"})
    const abonne = new Abonnes(id,typeAbonnement,dureeEnMois);
    try{
        
    }
    catch(err) {

    }

    


}
module.exports = {getAll,getOneAbonne};