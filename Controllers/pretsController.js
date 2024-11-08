const Prets = require('../Models/prets')
const {livres, prets} = require('../config/tables')


const getAll = async (req,res) => {
    try{
    const result = await Prets.getAll()
    if(!result) throw {err : "Nothing found"}
    res.status(200).send(result)
    }
    catch(err) {
        res.status(500).send({err : err})
    }
}
const getOne = async (req,res) => {
    try{
        const {id} = req.params 
        console.log(id)
        const resultat =await Prets.getOne(id)
        if(!resultat) throw {err:"Not found"}
        res.status(200).send(resultat)
    }
    catch(err) {
        res.status(500).json({err : err.message})
    }
}
const addPret = async (req,res) => {
    try{
        const {idLivre,durreEnJours} = req.body
        if(!idLivre || !durreEnJours) throw {err : "All data required"}
        if(livres.findOne({where : {id : idLivre}})) {
            const pret = new Prets(null,idLivre,durreEnJours);
            console.log("-----1-----")
            const resultat = await pret.addPret();
            console.log("-----2-----")
            console.log("esultat "+resultat)
            if(!resultat) throw {err : "Internal error"}
            res.status(201).json({id : resultat, message : "Created"})
        }
        else throw {err:"The above IdLivre was not found in livre table"}
    }
    catch(err) {
        res.status(500).json({err : err})
    }
}
const updatePret = async (req,res) => {
    try {
        const {id} = req.params
        const {durreEnJours} = req.body
        if(!durreEnJours) throw {err : "All data required"}
        const pret = new Prets(id,null,durreEnJours)
        const result = await pret.updatePret();
        console.log("pret result : "+result)
        if(!result) throw {err : "Internal error"}
        res.status(201).json({id : result, message : "Updated"})
    }
    catch(err) {
        res.status(500).json({err : err})
    }
}
const deletePret = async (req,res) => {
    try{
        const {id} = req.params
        const resultat = await Prets.deletePret(id);
        if(!resultat) throw {err : "Internal error"}
        console.log(resultat)
        res.status(200).json({id : resultat , message : "Deleted"})
    }
    catch(err) {
        res.status(500).json({err : err})
    }
}

module.exports = {getAll,getOne,addPret,updatePret,deletePret}