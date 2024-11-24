const express = require('express');
const router = express.Router();
const abonnesController = require('../Controllers/abonnesController')


router.get("",abonnesController.getAll);

router.get("/:id",abonnesController.getOneAbonne);

router.post("/add",abonnesController.addAbonne);

router.put("/update/:id",abonnesController.updateAbonne);

router.delete("/delete/:id",abonnesController.deleteAbonne);

module.exports = router;