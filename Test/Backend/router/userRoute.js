import express from 'express'
import { addproduct } from '../Controller/product.js';

const route = express.Router();

route.post("/add-product",addproduct)



export default route;


