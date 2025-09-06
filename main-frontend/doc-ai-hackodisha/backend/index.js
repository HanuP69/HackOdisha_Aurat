import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/doc-ai")
  .then(() => console.log("MongoDB connected",mongoose.Collection.name))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
