const getUsers = require("../usersAPI/routes");
const getOrders = require("../ordersAPI/routes");

const router = require("express").Router();

router.use("/users", getUsers);
router.use("/orders",getOrders);

module.exports = router;
