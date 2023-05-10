import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import bcrypt from "bcrypt";

// import { transport } from "./mail/transporter.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//node mailer
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Ary-store" });
});

//port
const PORT = process.env.PORT || 8081;

// run listen
app.listen(PORT, () => {
  console.log(` ${process.env.DEV_MODE} , Server Started ${PORT}`);
});
