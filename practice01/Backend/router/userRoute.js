import express from "express";
import { addUser, readUser} from "../Controller/user.js";

const route = express.Router();

route.post("/add_user",addUser)
route.get("/read_user",readUser)

export default route;