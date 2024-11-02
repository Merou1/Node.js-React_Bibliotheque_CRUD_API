
const abonnesdb = [
    {id : 0, typeAbonnement : 2, dureeEnMois : 2}, 
    {id : 1, typeAbonnement : 1, dureeEnMois : 5},
]

const livresdb = [ 
    {id : 0, titre : "livre1", nbPage:10, auteur:"Jean paul"},
    {id : 1, titre : "livre2", nbPage:40, auteur:"Mer1"}
]

const pretsdb = [
    {idPret : 0, idLivre:0, durreEnJours:10},
    {idPret : 1, idLivre:1, durreEnJours:20}
]

module.exports = {pretsdb,livresdb,abonnesdb}