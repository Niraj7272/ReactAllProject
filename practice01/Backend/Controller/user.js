import db from "../Database/db.js";

export const addUser = (req,res) => {
    const { name,email,password } = req.body;
    const q = `insert into user(name,email,password) values(?,?,?)`;
    db.query(q, [name,email,password], (err,result) =>{
        if (err) return res.send(err);
        return res.send({ result, message:"User Inserted Successfully!"});
    })
}

export const readUser = (req,res) => {
    res.send({message:"getuser"});
}

export const readSpecificUser = (req,res) => {
    const id = req.params.id;
    res.send()
}