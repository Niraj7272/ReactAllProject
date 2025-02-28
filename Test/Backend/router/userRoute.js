import express from 'express'
import { addproduct } from '../Controller/product.js';

const route = express.Router();

route.post("/add-product",addproduct)
route.get()
route.get()
route.delete()
route.patch()


export default route;

