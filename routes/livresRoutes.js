const express = require('express');
const router = express.Router();

const livres = [ 
    {id : 0, titre : "livre1", nbPage:10, auteur:"Jean paul"},
    {id : 1, titre : "livre2", nbPage:40, auteur:"Mer1"}
]

router.get("",(req,res) => {
    res.status(200).send(livres)
})

router.get("/:id",(req,res) => {
    const {id} = req.params;
    /*calling res.send() multiple times within the forEach loop. Since res.send() terminates the response, 
    attempting to send another response results in the ERR_HTTP_HEADERS_SENT error.
    livres.forEach(livre => {
        if(livre.id  == id ) res.status(200).send(livre); b7al return response katsali hna donc une fois njereb id akhour maghaykhdesh hit sf dert res lewla
        else {res.status(500).send("Not found")}  
    })
    */
   //that's why we should avoid multiple res in on foreach loop
   const livre = livres.find(livre => livre.id == id)
   if(livre) res.status(200).send(livre)
   else {res.status(500).json({err:"Not found"})}
})

router.post("",(req,res) => {

    console.log("1")
    const {id,titre,nbPage,auteur} = req.body
    console.log(id,titre,nbPage,auteur)
    if(titre && nbPage && auteur) {
        livres.push({id: id, titre:titre,nbPage:nbPage,auteur:auteur})
        res.status(201).json({id,message:"Added"})
    }
    else res.status(500).send("False information")

})

router.put("/:id",(req,res) => {
    const {id} = req.params;
    const {titre,nbPage,auteur} = req.body
    if(!titre || !nbPage || !auteur){
        res.status(500).send("All data required") 
    }
    try{
        livres.forEach(livre => {
            if(livre.id == id){
                livre.titre = titre;
                livre.nbPage=nbPage;
                livre.auteur=auteur;
            }
        })
        res.status(200).json({id,message:"Updated"})
    }
    catch(err) {
        res.status(500).json({error:"Update failed"})
    }
})

router.delete("/:id",(req,res) => {

    const {id} = req.params
    livres.pop(livres.filter(livre => livre.id == id))
    res.status(200).json({id,message:"Deleted"})

})


module.exports = {router,livres};