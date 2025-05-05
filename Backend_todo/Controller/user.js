import db from "../Database/db.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const insertUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
//   console.log(hashPassword);


  const q = `insert into users(name,email,password) values(?,?,?)`;
  db.query(q, [name,email, hashPassword], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "user inserted successfully" });
  });
};



export const login = (req,res) =>{
  const {email,password} = req.body;

  const q =`Select * from users where email = ?`;
  db.query(q,[email],(err,data)=>{
    if (err) return res.send(err);
    if (data.length === 0) return res.send("User not found");

    console.log(data, ":Data");

    const hashPassword = data[0].password;
    const isPasswordValid = bcrypt.compareSync(password,hashPassword);

    if(!isPasswordValid)
      return res.send({message:"password is not correct"});

    const token = jwt.sign({uid: data[0].id, role: data[0].role},
      "secretkey"
    );

    console.log(token,":Token");

    return res.send({
      message:"user login successfully",
      data: data[0],
      token: token,
    });
  })
}