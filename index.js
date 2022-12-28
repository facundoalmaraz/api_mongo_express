import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";

import checkMethod from "./middlewares/checkMethod.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/roles", roleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks",checkMethod , taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
