import express from 'express'
import { addItem, deleteItem, readItem, readSpecificItem, updateItem } from '../Controller/item.js';

const route = express.Router();

route.post("/add-item",addItem);
route.get("/read-item",readItem);
route.get("/readSpecific-item/:id",readSpecificItem)
route.delete("/delete-item/:id", deleteItem)
route.patch("/update-item/:id",updateItem)

export default route;