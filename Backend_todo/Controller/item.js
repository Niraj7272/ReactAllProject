import db from "../Database/db.js";

export const addItem = (req, res) => {
  const { title, description } = req.body;
  const q = `insert into items(title,description) values(?,?)`;
  db.query(q, [title, description], (err, result) => {
    if (err) return res.send(err);
    return res.send({ result, message: "user inserted successfully" });
  });
};

export const readItem = (req, res) => {
  const q = `select * from items`;
  db.query(q, (err, result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

export const readSpecificItem = (req, res) => {
  const id = req.params.id;
  const q = `select * from items where id=?`;
  db.query(q, [id], (err, result) => {
    if (err) return res.send(err);
    return res.send(result[0]);
  });
};

export const deleteItem = (req,res) =>{
    const id = req.params.id;
    const q = `Delete from items WHERE id=?`;
    db.query(q,[id],(err,result)=>{
        if(err) return res.send(err)
            return res.send({result,message:"Item deleted successfully"}); 
    })
}

export const updateItem = (req,res) =>{
    const id = req.params.id;
    const q = `Update from items WHERE id=?`;
    db.query(q,[id],(err,result)=>{
        if(err) return res.send(err)
            return res.send({result,message:"Item Updated Successfully!"});
    })
}