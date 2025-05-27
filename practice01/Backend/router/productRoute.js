import express from "express";
import upload from "../middleWare/multerConfig.js";
import { addProduct } from "../Controller/product.js";
const router = express.Router();

router.post("/add", upload.single("image"), addProduct);

export default router;
