import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serviceRoutes from "./routes/services.js"; // Import services route

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows handling JSON data

// Use Routes
app.use("/api/services", serviceRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start Server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
