const db = require('./db');
const { abonnes, livres, prets } = require('./tables'); 

db.sequelize.sync({ alter: true })  
    .then(() => {
        console.log("Database synchronized successfully!");
    })
    .catch((err) => {
        console.error("Error synchronizing database:", err);
    });
