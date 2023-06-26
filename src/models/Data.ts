import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  dataType: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  result: {
    type: Array<Object>,
    required: false,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Data = mongoose.model("Data", DataSchema);

export default Data;
