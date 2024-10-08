const orderClass = require("../controllers");
const router = require("express").Router();

const { getAllList } = new orderClass();

router.get('/allOrders', getAllList);

module.exports = router;
