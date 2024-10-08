class getAllOrders {
  constructor() {}

  getAllList(req, res) {
    res.send(["order1, order2, order3"]);
    res.end();
  }
}

module.exports = getAllOrders;