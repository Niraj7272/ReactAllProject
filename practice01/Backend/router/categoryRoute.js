import express from "express";
import { addCategory, deleteCategory, readCategory, readSpecificCategory, updateCategory } from "../Controller/category.js";

const route = express.Router();

route.post("/add_category",addCategory)
route.get("/read_category",readCategory)
route.get("/readSpecific_category/:id",readSpecificCategory)
route.delete("/delete_category/:id", deleteCategory)
route.patch("/update_category/:id",updateCategory)

export default route;