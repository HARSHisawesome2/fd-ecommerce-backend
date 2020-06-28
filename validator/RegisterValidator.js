const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {
    status: "",
    message: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  };
  //  avoid error pop-up
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Username validator
  if (Validator.isEmpty(data.username)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      username: "Username is required.",
    };
    //  the result without "!" is true. we're trying to get the reverse result
    // isAlphanumeric = we dont want "@", "#", etc. Only want text & number.
  } else if (!Validator.isAlphanumeric(data.username)) {
    errors.status = 401;
    errors.message = {
      ...errors.message,
      username: "Username is invalid",
    };
  }
};
