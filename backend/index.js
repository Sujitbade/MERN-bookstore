import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/books", booksRoute);

// Connect to MongoDB Atlas and start server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Successfully connected to the database");

    // Start the server only after the database connection is established
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err.message);
  });
