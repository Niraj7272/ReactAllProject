import express from 'express'
import { insertImage } from '../Controller/file.js'
import upload from '../middleware/multerConfig.js'

const route = express.Router();

route.post("/insert-image", upload.single("image"), insertImage);
// route.post("/insert-image", upload.array("image",5), insertImage);



export default route;