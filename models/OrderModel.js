const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    customerId: {
     type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id',
          },
    },
    
    paymentid : {
    type : string ,
    required : true 
      
      
    },
    
    paymentstatus  : {
    type : DataTypes.BOOLEAN,
    defaultValue : false,
    
    },
    
    
      itemsPrice: {
        type: Number,
        required: true,
        default: 0,
      },
    
    
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
      },
    
    
    orderstaus : {
      type: Sequelize.ENUM("pending", "processing", "devlivered"),
      defaultValue: "processing",
      
    }
    
    
    
    
    
    
    
    
    
    
  },
  // to set time
  { timestamps: true }
);
module.exports = mongoose.model("order", OrderModel);
