const { where,Op } = require('sequelize');
const {livres} = require('../config/tables')

class Livres {
    constructor(id,titre,nbPage,auteur) {
        this.id = id;
        this.titre = titre;
        this.nbPage = nbPage;
        this.auteur = auteur;
    }

    static getAll = () => {
        return livres.findAll()
        .then(result => result)
        .catch(err => {throw err})
    }
    static getOne = (id) => {
        return livres.findOne({where : {id : id}})
        .then(result => result)
        .catch(err => {throw err})
    }
    addLivre = () => {
        console.log("this.auteur in model: "+this.auteur)
        return livres.create({titre:this.titre,nbPage:this.nbPage,auteur:this.auteur})
        .then(result => result.id)
        .catch(err => {throw err})
    }
    static filterLivres = (search) => {
        return livres.findAll({where: {titre: {
            [Op.like]: `%${search}%`
        }}})
        .then(result => result)
        .catch(err => {throw err})
    }
    updateLivre = () => {
        return livres.update({titre:this.titre,nbPage:this.nbPage,auteur:this.auteur},{where : {id:this.id}})
        .then(result => result.id)
        .catch(err => {throw err})
    }
    static deleteLivre = (id) => {
        return livres.destroy({where : {id : id}})
        .then(result => result)
        .catch(err => {throw err})
    }


}

module.exports = Livres;