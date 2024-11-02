import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Product from "./models/product_model.js";

import productRoutes from "./routes/product_route.js"

const app = express();

//middleware
app.use(express.json()); //allows us to accept JSON data in the req.body

// Directly use the connection string here
const mongoURI = "mongodb+srv://syedasaniyya14:fnmfqC8ZeA40eFGf@cluster0.s5wdq.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";

app.use("/api/products", productRoutes);

app.listen(5000, async () => {
    connectDB();
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    console.log("Server started at http://localhost:5000");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
  }
});

//fnmfqC8ZeA40eFGf