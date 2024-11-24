const express = require('express');
const router = express.Router();
const livresRoutes = require('./livresRoutes');
const pretsController = require('../Controllers/pretsController');


router.get("",pretsController.getAll)

router.get("/:id",pretsController.getOne)

router.post("/add",pretsController.addPret)

router.put("/update/:id",pretsController.updatePret)

router.delete("/delete/:id",pretsController.deletePret)

module.exports = router;