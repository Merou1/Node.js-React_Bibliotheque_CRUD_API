const { where } = require('sequelize');
const {abonnes} = require('../config/tables')

class Abonnes {
    constructor(id, typeAbonnement,dureeEnMois) {
      this.id = id;
      this.typeAbonnement = typeAbonnement;
      this.dureeEnMois=dureeEnMois
    }

    static getAll = () => {
        return abonnes.findAll()
        .then(result => result)
        .catch(err => {throw err})
    }
    static getOneAbonne(id) {   
        return abonnes.findOne({where : {id : id}})
        .then(result => result)
        .catch(err => {throw err}) ; 
    }
    addAbonne = () => { 
        console.log(this.typeAbonnement,this.dureeEnMois)
            return abonnes.create({typeAbonnement:this.typeAbonnement,dureeEnMois:this.dureeEnMois})
            .then(result => result.id)
            .catch(err => {throw err})
    }
    updateAbonne = () => {
            return abonnes.update({typeAbonnement:this.typeAbonnement,dureeEnMois:this.dureeEnMois},{where: {id : this.id}})
            .then(result => result)
            .catch(err => {throw err})
    }
    static deleteAbonne = (id) => {
        return abonnes.destroy({where : {id : id}})
        .then(result => result)
        .catch(err => {throw err})
    }
}

module.exports = Abonnes; 