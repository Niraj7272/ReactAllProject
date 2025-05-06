import db from "../Database/db.js";

export const addCategory = (req, res) => {
  const { category_title } = req.body;
    //  console.log(req.body);
     const q = `insert into category(category_title) values(?)`;
     db.query(q, [category_title], (err, result) =>{
      if (err) return res.send(err);
      return res.send({result,message:"category inserted Successfully"});
     });
};

export const readCategory = (req,res) => {
  const q = `select * from category`;
  db.query(q, (err,result) => {
    if (err) return res.send(err);
    return res.send(result);
  });
};

export const readSpecificCategory = (req,res) => {
  const id = req.params.id;
  const q = `select * from category where idcategory=?`;
  db.query(q, [id], (err, result) => {
    if (err) return res.send(err);
    return res.send(result[0]);
  });
};

export const deleteCategory = (req,res) => {
  const id = req.params.id;
  const q = `Delete from category Where idcategory=?`;
  db.query(q, [id], (err, result) => {
    if(err) return res.send(err);
    return res.send({result,message:"Category Delated Successfully !"});
  });
};

export const updateCategory = (req, res) => {
  const id = req.params.id;
  const {category_title} = req.body;
  const q = `update category SET category_title=? WHERE idcategory=?`;
  db.query(q,[category_title,id],(err,result)=> {
    if(err) return res.send(err);
    return res.send({result,message:"Category Updated Successfully !"});
  });
};
