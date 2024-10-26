const express = require('express');
const router = express.Router();

const abonnes = [
    {id : 0, typeAbonnement : 2, dureeEnMois : 2}, //typeAbonnement 1: normal 2 : avancée 3 : premium
    {id : 1, typeAbonnement : 1, dureeEnMois : 5},
]

router.get("",(req,res) => {

    res.status(200).send(abonnes)

})

router.get("/:id", (req,res) => {

    const {id} = req.params;
    const abonne = abonnes.find(aboone => aboone.id == id);
    if(abonne) res.status(200).send(abonne)
    else res.status(404).json({err:"Not found"})

})

router.post("",(req,res) => {

    const {id,typeAbonnement,dureeEnMois} = req.body;
    if(!id || !typeAbonnement || !dureeEnMois) res.status(500).json({err : "All data required"})
    abonnes.push({id:id,typeAbonnement:typeAbonnement,dureeEnMois:dureeEnMois})
    res.status(201).json({id, message : "Created"})
})

router.put("/:id",(req,res) => {

    const {id} = req.params;
    if (!abonnes.find(abonne => abonne.id ==id)) res.status(500).json({err :"Note found"})
    const {typeAbonnement,dureeEnMois} = req.body
    const abonne = abonnes.find(abonne => abonne.id ==id)
    abonne.typeAbonnement=typeAbonnement;
    abonne.dureeEnMois=dureeEnMois;
    res.status(201).json({id,message:"Updated"})

})

router.delete("/:id",(req,res) => {

    const {id} = req.params;
    abonnes.pop(abonnes.find(abonne => abonne.id ==id))
    res.status(200).json({id,message:"Deleted"})


})

module.exports = router;