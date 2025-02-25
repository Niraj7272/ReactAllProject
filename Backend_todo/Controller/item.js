import db from '../Database/db.js'

export const addItem = (req,res) =>{
    const {item,description}= req.body;
    const q = `insert into items(item,description) values(?,?,?)`;
    db.query(q,[item,description],(err,result)=>{
        if(err) return res.send(err);
        return res.send({result,message:"user inserted successfully"});
    });
};


