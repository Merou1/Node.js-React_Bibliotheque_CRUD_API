const express = require('express');
const router = express.Router();
const abonnes = require('../Models/abonnes')
const abonnesController = require('../Controllers/abonnesController')



router.get("",abonnesController.getAll);

router.get("/:id",abonnesController.getOneAbonne)

router.post("",(req,res) => {

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