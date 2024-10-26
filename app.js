const express = require('express');
const app = express();
const port = 3000;
const abonnes = require('./routes/abonnesRoutes');
const prets = require('./routes/pretsRoutes');
const livres= require('./routes/livresRoutes');

app.use(express.json());


app.get("/", (req,res) => {
    res.send("Welcome to CRUD Api")
})

app.use("/abonnes",abonnes);
app.use("/prets",prets);
app.use("/livres",livres.router);


app.listen(port,() => {
    console.log("Listenig on http://localhost:"+port);
})


