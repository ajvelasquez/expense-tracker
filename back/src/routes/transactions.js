const express = require("express");
const {
  getTransacations,
  addTransacations,
  deleteTransacations,
} = require("../controllers/transactions");
const router = express.Router();

router.get("/", getTransacations);
router.post("/", addTransacations);
router.delete("/:id", deleteTransacations);

module.exports = router;
