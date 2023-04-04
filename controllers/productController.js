import productModel from "../models/productModel.js";
// import slugify from "slugify";
import fs from "fs";

export const productController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //Validations
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is required" });
      case !description:
        return res.status(500).send({ error: "descriptionis required" });
      case !price:
        return res.status(500).send({ error: "price is required" });
      case !category:
        return res.status(500).send({ error: "category is required" });
      case !quantity:
        return res.status(500).send({ error: "quantity is required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo  is required and should be less 1mb " });
    }
    const products = await productModel;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in creating product Controller",
    });
  }
};
