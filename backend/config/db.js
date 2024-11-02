import mongoose from "mongoose";

// Directly use the connection string here
const mongoURI = "mongodb+srv://syedasaniyya14:fnmfqC8ZeA40eFGf@cluster0.s5wdq.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};
