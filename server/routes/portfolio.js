const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UsersController");
const Protfolio = require('../controllers/PortfolioController')

router.get("/getportfolios", Protfolio.getPortfolios );
// router.post("", UserCtrl.authMiddleware,Rental.createRental );
// router.patch("/:id",UserCtrl.authMiddleware, Rental.editRental );

// router.delete("/:id",UserCtrl.authMiddleware, Rental.deleteRental );
// router.get("/:id", Rental.getRentalById );

// router.get("", Rental.getRentals);

module.exports = router;
  