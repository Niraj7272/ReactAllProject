import db from "../Database/db.js";

export const addProduct = (req,res) => {
    const {product_title,price,stock,category,description,image} = req.body;
    const q = `INSERT into product(product_title,price,stock,category,description,image) values(?,?,?,?,?,?)`;
    db.query(q, [product_title, price, stock, quantity, description, image], (err, result) =>{
        if(err) return res.send(err);
        return res.send({result, message: "Product inserted successfully!"})
    })
}