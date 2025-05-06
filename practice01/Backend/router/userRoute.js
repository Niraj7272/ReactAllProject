import express from "express";
import { addUser, deleteUser, login, readSpecificUser, readUser, updateUser} from "../Controller/user.js";

const route = express.Router();

// signUp
route.post("/add_user",addUser)
route.get("/read_user",readUser)
route.get("/readSpecific_user/:id",readSpecificUser)
route.delete("/delete_user/:id",deleteUser)
route.patch("/update_user/:id",updateUser)

//login
route.post("/login",login)

export default route;