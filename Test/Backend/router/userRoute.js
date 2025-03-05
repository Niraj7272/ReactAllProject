import express from 'express'
import { addproduct, readProduct } from '../Controller/product.js';

const route = express.Router();

route.post("/add-product",addproduct)
route.get("/read-product",readProduct)



export default route;


