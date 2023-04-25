import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model("Data", DataSchema);

export default Data;
