import { Schema, model } from "mongoose";

const premiumSchema = new Schema({
  redeemedUser: {
    id: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  code: {
    type: String,
    required: true
  },
  redeemedOn: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true,
    default: null
  }
});

const Premium = model("Premium", premiumSchema);

export default Premium;
