const Livres = require('../Models/livres')

const getAll = async (req, res) => {
    try {
        const result = await Livres.getAll();
        res.status(200).json(result);  
    } catch (err) {
        res.status(500).json({ err: err });  
    }
}

const getOne = async (req,res) => {
    try{
           const {id} = req.params;
           const result = await Livres.getOne(id);
           if(!result) throw {err : "Not found"} 
           res.status(200).json(result)
    }
    catch(err) {
        res.status(500).json({error : err})

    }
}
const addaddLivre = async (req,res) => {
    try{
        const {titre,nbPage,auteur} = req.body
        console.log(typeof titre,typeof nbPage,typeof auteur)
        console.log(titre,nbPage,auteur)
        if(titre && nbPage && auteur) {
            const livre = new Livres(null,titre,nbPage,auteur)
            const result = await livre.addLivre();          
            res.status(201).json({id:result,message:"Added"})
        }
        else {
            res.status(400).json({ err: "Invalid input" });
        }
    }
    catch(err) {
        res.status(500).json({ err: "An error occurred" })
    }
}
const updateLivre = async (req,res) => {
    try{
        const {id} = req.params;
        const {titre,nbPage,auteur} = req.body
        if(!titre || !nbPage || !auteur){
            throw {err : "All data required"} 
        }
        const livre = new Livres(id,titre,nbPage,auteur)
        const result = await livre.updateLivre();
        res.status(201).json({id:result,message:"Updated"})
    }
    catch(err) {
        res.status(500).json({error:err.message})
    }
}
const deleteLivre = (req,res) => {
    try {
        const {id} = req.params
        Livres.deleteLivre(id)
        res.status(200).json({id,message:"Deleted"})
    }
    catch(err) {
        res.status(500).json({err : err.message})
    }

}
module.exports = {getAll,getOne,addaddLivre,updateLivre,deleteLivre};