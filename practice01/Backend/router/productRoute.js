import express from "express";
import upload from "../middleWare/multerConfig.js";
import { addProduct, deleteProduct, readProduct, readSpecificproduct, updateProduct } from "../Controller/product.js";
const router = express.Router();

router.post("/add_product", upload.single("image"), addProduct);
router.get("/read_product",readProduct);
router.get("/readSpecific_product/:id",readSpecificproduct);
router.delete("/delete_product/:id",deleteProduct);
router.patch("/update_product/:id",updateProduct);

export default router;
