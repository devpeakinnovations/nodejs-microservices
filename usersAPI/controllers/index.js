const { default: axios } = require("axios");

const allUsers = ["user1", "user2", "user3"];
class usersClass {
  constructor() {}


  getUsers(req, res) {
    try {
      res.send(allUsers);
      res.end();
    } catch (error) {
      res.send("Error in fetching data");
      res.end();
    }
  }

  async getAllUserOrders(req, res) {
    const getOrders = await axios("http://127.0.0.1:4000/api/users/allUsers");
    console.log(getOrders);
    res.json({
      ...getOrders
    })
    res.end();
  }
}

module.exports = usersClass
