const UsersModel = require("../models/UsersModel");

module.exports = {
  register: (req, res, next) => {
    let obj = {
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    };
    UsersModel.create(obj)
      .then((result) => {
        res.json({
          status: "success",
          message: "Successfully create account!",
          data: result,
        });
      })
      .catch((error) => res.json(error));
  },

  getAllUsers: (req, res, next) => {
    UsersModel.find({})
      .then((result) => {
        res.json({
          status: "success",
          message: "Successfully get all users!",
          data: result,
        });
      })
      .catch((error) => res.json(error));
  },

  getUserId: (req, res, next) => {
    UsersModel.findById(req.params.userId)
      .then((result) => {
        res.json({
          status: "success",
          message: `Successfully get data id of ${req.params.userId} !`,
          data: result,
        });
      })
      .catch((error) => res.json(error));
  },

  deleteById: (req, res, next) => {
    UsersModel.findByIdAndRemove(req.params.userId).then(() => {
      res.json({
        status: "success",
        message: `Successfully delete id of ${req.params.userId} !`,
      });
    });
  },
};
