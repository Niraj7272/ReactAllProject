import express from "express";
import { addCategory } from "../Controller/category.js";

const route = express.Router();

route.post("/add-category",addCategory)
// route.get("/read-category",readCategory)

export default route;