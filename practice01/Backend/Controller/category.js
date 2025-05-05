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
