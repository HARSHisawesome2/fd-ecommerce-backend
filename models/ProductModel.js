const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
  image: {
    type: String,
    default:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sale: {
    type: Boolean,
    required: true,
  },
  productGender: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
  },
});
module.exports = mongoose.model("product", ProductModel);
