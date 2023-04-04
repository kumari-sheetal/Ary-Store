import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { productController } from "../controllers/productController.js";
import formidable from "express-formidable";
//route object
const router = express.Router();

//routes
//create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  productController
);

export default router;
