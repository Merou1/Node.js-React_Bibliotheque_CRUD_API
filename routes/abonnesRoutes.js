const express = require('express');
const router = express.Router();
const abonnesController = require('../Controllers/abonnesController')


router.get("",abonnesController.getAll);

router.get("/:id",abonnesController.getOneAbonne);

router.post("",abonnesController.addAbonne);

router.put("/:id",abonnesController.updateAbonne);

router.delete("/:id",abonnesController.deleteAbonne);

module.exports = router;