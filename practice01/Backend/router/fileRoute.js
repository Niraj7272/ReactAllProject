import express from "express";
import { insertImage } from "../Controller/file";

const route = express.Router();

route.post("/insert-image", upload.single("image"),insertImage);

export default route;