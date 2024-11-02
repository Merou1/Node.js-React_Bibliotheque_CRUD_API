const {abonnesdb} = require('../db/db')

class Abonnes {
    constructor(id, typeAbonnement,dureeEnMois) {
      this.id = id;
      this.typeAbonnement = typeAbonnement;
      this.dureeEnMois=dureeEnMois
    }

    static getAll = () => {
        return abonnesdb
    }
    static getOneAbonne(id) {
        try{
            const abonne = abonnesdb.find(abonne => abonne.id == id) ;
            return abonne;
        }
        catch(err) {
            return err;
        }
    }
}

module.exports = Abonnes;