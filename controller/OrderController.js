const orderModel = require("../models/OrderModel");

module.exports = {
  createOrder: (req, res, next) => {
    let obj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      city: req.body.city,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      postalCode: req.body.postalCode,
      products: req.body.products,
      customerId: req.body.customerId,
    };
  },
};
