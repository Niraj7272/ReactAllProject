import db from "../Database/db";

export const addproduct = (req,res) =>{
    const {name,price,description} = req.body;
    const q =`Insert into product (name,price,description) values(?,?,?)`;
    db.query(q,[name,price,description],(err,result)=>{
        if(err) return res.send(err)
            return res.send({result,message:"Product Added Successfully"})
    })
}