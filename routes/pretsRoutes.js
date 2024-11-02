const express = require('express');
const router = express.Router();
const livresRoutes = require('./livresRoutes');


router.get("",(req,res) => {
    res.status(200).send(prets)
})

router.get("/:id",(req,res) => {
    const {idPret} = req.params
    const pret = prets.find(pret => pret.idPret = idPret)
    if(!pret) res.status(404).json({err:"Not found"})
    else res.status(200).send(pret)
})

router.post("",(req,res) => {
    const {idPret,idLivre,durreEnJours} = req.body
    if(!idPret || !idLivre || !durreEnJours) res.status(500).json({err:"Not found"})
    if(livresRoutes.livres.find(livre => livre.id == idLivre)) {
        prets.push({idPret,idLivre,durreEnJours})
        res.status(201).json({idPret,message:"Added"})
    }
    else {res.status(500).json({idLivre,err:"The above IdLivre was not found in livre table"})}

})

router.put("/:id",(req,res) =>{
    const {id} = req.params;
    const {idLivre,durreEnJours} = req.body;
    console.log("---------1------")
    if (idLivre !== undefined && durreEnJours !== undefined && livresRoutes.livres.find(livre => livre.id == idLivre)) {
    console.log("---------2------")
    const pret = prets.find(p =>  p.idPret == id)
    console.log("---------3------")
    console.log(pret)


    if (pret) {
        pret.idLivre = idLivre;
        pret.durreEnJours = durreEnJours;
        return res.status(201).json({ id, message: "Updated" });
    } else {
        return res.status(404).json({ err: "Pret not found" });
    }
}
    else {
        res.status(500).json({err:"All data required"})
    }

})

router.delete("/:id",(req,res) => {
    const {id} = req.params;
    const pretToDelete = prets.find(pret => pret.idPret == id)
    if(pretToDelete) {
    prets.pop(pretToDelete)
    res.status(200).json({id,message:"Deleted"})
    }
    else res.status(404).json({err:"Not found"})
})

module.exports = router;