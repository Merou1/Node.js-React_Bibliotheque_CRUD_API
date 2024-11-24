const express = require('express');
const router = express.Router();
const livresController = require('../Controllers/livresController')


router.get("",livresController.getAll)

router.get("/:id",livresController.getOne)

router.post("/add",livresController.addaddLivre)

router.put("/update/:id",livresController.updateLivre)

router.delete("/delete/:id",livresController.deleteLivre)

module.exports = router;