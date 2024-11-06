const { Sequelize } = require('sequelize');
const db = require('./db');
const sequelize = db.sequelize;

//abonnes table
const abonnes = sequelize.define('abonnes',{
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    typeAbonnement: Sequelize.INTEGER,
    dureeEnMois : Sequelize.INTEGER
    
});
//livres table
const livres = sequelize.define('livres',{
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    titre : Sequelize.STRING,
    nbPage : Sequelize.INTEGER,
    auteur : Sequelize.STRING

});
//prets table
const prets = sequelize.define('prets',{
    idPret: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    idLivre : {
        type : Sequelize.INTEGER,
        references: {
            model: livres,      
            key: 'id'           
        },
        onUpdate: 'CASCADE',    
        onDelete: 'CASCADE'  
    },
    durreEnJours : Sequelize.INTEGER
});

module.exports  = {abonnes,prets,livres}