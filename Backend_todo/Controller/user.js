import db from "../Database/db.js";
import bcrypt from "bcryptjs";

export const insertUser = (req, res) => {
  const { name, email, password } = req.body;
//   console.log(req.body);
  

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
//   console.log(hashPassword);


  const q = `insert into users(name,email,password) values(?,?,?)`;
  db.query(q, [name,email, hashPassword], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "user inserted successfully" });
  });
};