const usersClass = require("../controllers");

const router = require("express").Router();
const { getUsers, getAllUserOrders } = new usersClass();

router.get("/allUsers", getUsers);
router.get('/getAllUserOrder', getAllUserOrders);

module.exports = router;