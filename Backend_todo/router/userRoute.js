import express from 'express'
import { addItem, readItem, readSpecificItem } from '../Controller/item.js';

const route = express.Router();

route.post("/add-item",addItem);
route.get("/read-item",readItem);
route.get("/readSpecific-item/:id",readSpecificItem)

export default route;