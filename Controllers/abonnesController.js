const { abonnesdb } = require('../config/db');
const Abonnes = require('../Models/abonnes')

const getAll = async (req,res) => {
    try{   
        const all = await Abonnes.getAll();
        console.log(all)
        res.status(200).send(all)
    }
    catch(err) {
        res.status(500).json({err:err.message})
    }

}
const getOneAbonne = async (req,res) => {
    
    try{
        const {id} = req.params;
        const abonne = await Abonnes.getOneAbonne(id);
        if(!abonne) res.status(404).json({error:"Not found"})
        res.status(200).send(abonne);
    }
    catch(err) {
        res.status(500).json({err:err.message})
    }

}
const addAbonne =async (req,res) => {
    try {
    const {typeAbonnement,dureeEnMois} = req.body;
    if(!typeAbonnement || !dureeEnMois) throw { message: "All data required" };
    const abonne = new Abonnes(null,typeAbonnement,dureeEnMois);
    console.log(dureeEnMois,typeAbonnement)
    const result = await abonne.addAbonne();
    console.log("add result : ",result)
    res.status(201).json({
        message:"Added successfully",
        id:result
    })
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
}
const updateAbonne = async (req,res) => {
    try{
        const {id} = req.params;
        const {typeAbonnement,dureeEnMois} = req.body
        if(!typeAbonnement || !dureeEnMois) throw { message: "All data required" };
        const abonne = new Abonnes(id,typeAbonnement,dureeEnMois);
        const result = await abonne.updateAbonne();
        console.log(result[0])
        res.status(201).json({
            message:"Updated",
            id : result[0]
        })
    }
    catch (err){
        res.status(500).json({err : err.message})
    }

}
const deleteAbonne =async (req,res) => {
    try {
    const {id} = req.params
    const result =await Abonnes.deleteAbonne(id);
    console.log("delete result : "+result)
    res.status(200).json({
        message:"Deleted",
        id : result
    })     
    }
    catch(err) {
        res.status(500).json({err : err.message})
    }
}

module.exports = {getAll,getOneAbonne,addAbonne,updateAbonne,deleteAbonne};