import mongoose from "mongoose";

export default function connectToMongoose() {
  mongoose.connect(process.env.MONGOOSE_CONNECTION);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully to database!");
  });
}
