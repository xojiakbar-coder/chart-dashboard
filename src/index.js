import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page! Backend is working correctly.");
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
