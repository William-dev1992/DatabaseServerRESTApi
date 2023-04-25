import { app } from "./app";
import env from "dotenv";
import connectToMongoose from "./db/connection";

env.config();

const PORT = process.env.SERVER_PORT || 3333;
const HOST = process.env.SERVER_HOST || "localhost";

connectToMongoose();

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
