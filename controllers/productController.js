import productModel from "../models/productModel.js";
import slugify from "slugify";
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
    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      meaage: "Product created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in creating product Controller",
    });
  }
};
//get-all-productController
export const getproductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalcount: products.length,
      message: "All products",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting all product ",
    });
  }
};

//get-Single-Product-Controller
export const getSingleProductController = async (req, res) => {
  try {
    const slug = req.params;
    const products = await productModel
      .findOne(slug)
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,

      message: "getting single  product",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting single product ",
    });
  }
};

//product-Photo-Controller
export const productPhotoController = async (req, res) => {
  try {
    const products = await productModel
      .findById(req.params.pid)
      .select("photo");
    if (products.photo.data) {
      res.set("Content-type", products.photo.contentType);
      return res.status(200).send(products.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in product photos ",
    });
  }
};

//deleteProductController
export const deleteProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    const products = await productModel.findByIdAndDelete(pid);
    res.status(200).send({
      success: true,
      message: "product deleted successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in deleting the product ",
    });
  }
};
