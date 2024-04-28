const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();
// const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

mongoose
  .connect(
    "mongodb+srv://divyanshukumar736:hvlvLJsxoNbqZVIV@cluster0.ln2mfmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    // app.listen(5000);
    // console.log(`Server is running on port ${PORT}`);
    // });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
