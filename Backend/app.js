const express = require('express');
const app = express();
const port = 4000;
const abonnes = require('./routes/abonnesRoutes');
const prets = require('./routes/pretsRoutes');
const livres= require('./routes/livresRoutes');
const cors = require('cors');

app.use(cors());  


app.use(express.json());


app.get("/", (req,res) => {
    res.send("Welcome to BIBLIOTHEQUE Api")
})

app.use("/abonnes",abonnes);
app.use("/prets",prets);
app.use("/livres",livres);



app.listen(port,() => {
    console.log("Listenig on http://localhost:"+port);
})


