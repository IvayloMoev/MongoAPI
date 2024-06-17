const express = require("express");
const { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } = require("../controllers/customer.controller.js");

const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
