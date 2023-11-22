import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import errorHandleMiddleware from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use(
  cors({
    origin: "https://delight-shop-client.vercel.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// cloudinary configuration

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", paymentRoutes);
app.use("/api/v1", orderRoutes);

app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
