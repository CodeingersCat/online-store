import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  razor_res: {
    id: {
        type: String,
        required: true
    },
	entity: {
        type: String,
        required: true
    },
	
    amount : {
        type: Number,
        required: true
    },
	
    amount_paid: {
        type: Number,
        required: true
    },
	
    amount_due: {
        type: Number,
        required: true
    },
	
    currency: {
        type: String,
        required: true
    },
	
    receipt: {
        type: String,
    },

	offer_id: {
        type: String,
    },

	status: {
        type: String,
        required: true
    },

	attempts: {
        type: Number
    },

	notes: {
        type: Array
    },

	created_at: {
        type: String,
        required: true
    },
},
  items: [{
      product : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
      },
      qty : {
        type: Number,
      }}
  ]

// amount : {
//     type: Number,
//     required: true
// }
}, 
{timestamps: true});


const Order = mongoose.model("Order", orderSchema);
export default Order;


