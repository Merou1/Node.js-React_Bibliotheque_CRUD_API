const { where } = require('sequelize');
const {prets} = require('../config/tables')

class Prets {
    constructor(idPret,idLivre,durreEnJours) {
        this.idPret = idPret;
        this.idLivre = idLivre;
        this.durreEnJours = durreEnJours;
    }

    static getAll = () => {
        return prets.findAll()
        .then(result => result)
        .catch(err => {throw err})
    }
    static getOne = (id) => {
        return prets.findOne({where : {idPret : id}})
        .then(result => result)
        .catch(err => {throw err})
    }
    addPret = () => {
        return prets.create({idLivre:this.idLivre,durreEnJours:this.durreEnJours})
        .then(result => result.idPret)
        .catch(err => {throw err})
    }
    updatePret = () => {
        if(!(prets.findOne({where : {idPret : this.idPret}}))) throw {err : "No pret with IdPret : "+this.idPret+" was found"}
        return prets.update({durreEnJours:this.durreEnJours}, {where :{idPret:this.idPret}})
        .then(result => this.idPret)
        .catch(err => {throw err})
    }
    static deletePret = (id) => {
        return prets.destroy({where : {idPret : id}})
        .then(result => id)
        .catch(err => {throw err})
    }
}

module.exports = Prets;