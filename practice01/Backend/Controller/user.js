import db from "../Database/db.js";

export const addUser = (req, res) => {
  const { name, email, password } = req.body;
  const q = `insert into user(name,email,password) values(?,?,?)`;
  db.query(q, [name, email, password], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "User Inserted Successfully!" });
  });
};

export const readUser = (req, res) => {
  const q = `select * from user`;
  db.query(q, (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

export const readSpecificUser = (req, res) => {
  const id = req.params.id;
  const q = `select * FROM user WHERE iduser=?`;
  db.query(q, [id], (err, result) => {
    if (err) return res.send(err);
    return res.send(result[0]);
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const q = `Delete from user WHERE iduser=?`;
  db.query(q, [id], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "User Deleted Successfully !" });
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const q = `Update user SET name=?, email=?, password=? WHERE iduser=?`;
  db.query(q, [name, email, password, id], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "User Updated Successfully !" });
  });
};

//login
export const login = (req, res) => {
  const { email, password } = req.body;
  const q = `Select * from user WHERE email = ?`;
  db.query(q, [email], (err, data) => {
    if (err) return res.send(err);
    if (data.length === 0) return res.send({message:"User not found",status:999});

    // console.log(data, ":Data");
    const passworddb = data[0].password;
    // console.log(passworddb, "password only");
    // console.log(password);

    if (passworddb !==password) {
      return res.send({ message: "Password is not correct",status:999 });
    }
    return res.send({ message: "User Login Successfully", data: data[0] });
  });
};
