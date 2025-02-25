import express from 'express'
import { addItem } from '../Controller/item.js';

const route = express.Router();

route.post("/add-item",addItem);

export default route;