import express from 'express'
import { addItem, readItem } from '../Controller/item.js';

const route = express.Router();

route.post("/add-item",addItem);
route.get("/read-item",readItem);

export default route;