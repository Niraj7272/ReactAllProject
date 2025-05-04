import db from "../Database/db.js";

export const addCategory = (req,res) =>{
    const {category_title} = req.body;
    return res.send({message:"category inserted successfully"});
}