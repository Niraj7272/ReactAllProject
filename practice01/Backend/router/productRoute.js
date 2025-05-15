import express from "express";
import { addProduct } from "../Controller/product.js";

const route = express.Router();

route.post("/add_Product",addProduct);

export default route;