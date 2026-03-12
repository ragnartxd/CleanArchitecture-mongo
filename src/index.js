import { connectMongo } from "./infrastructure/database/mongo.js";
import dot from "dotenv";
import app from "./app.js";

dot.config();
await connectMongo();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
