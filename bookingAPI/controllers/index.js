const axios = require("axios").default;

class bookingsClass {
  constructor() {}

  async getBookings() {
    const bookings = await axios.get();
  }
}

module.exports = bookingsClass;