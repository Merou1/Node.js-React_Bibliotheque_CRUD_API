const express = require('express');
const router = express.Router();
const livresController = require('../Controllers/livresController')


router.get("",livresController.getAll)

router.get("/:id",livresController.getOne)

router.post("",livresController.addaddLivre)

router.put("/:id",livresController.updateLivre)

router.delete("/:id",livresController.deleteLivre)

module.exports = router;