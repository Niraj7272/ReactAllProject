import db from "../Database/db.js";

export const addProduct = (req, res) => {
  const { product_title, price, stock, category, description } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!image) {
    return res.status(400).json({ error: "Image is required" });
  }

  const q = `INSERT INTO product (product_title, price, stock, category, description, image) VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(
    q,
    [product_title, price, stock, category, description, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ result, message: "Product inserted successfully!" });
    }
  );
};

export const  readProduct = (req, res) => {
    const q = `SELECT * form product`;
    db.query(q,(err, result) => {
        if (err) return res.send(err)
        return res.send(result);
    });
}

export const readSpecificproduct = (req, res) => {
    const id = req.params.id;
    const q = `SELECT * FROM product WHERE idproduct=?`;
    db.query(q, [id],(err,result) => {
        if (err) return res.send(err);
        return res.send(result[0]);
    });
}

export const deleteProduct = (req,res) => {
    const id = req.params.id;
    const q = `DELETE FROM product WHERE idproduct=?`;
    db.query(q,[id],(err,result)=>{
        if (err) return res.send(err);
        return res.send({ result, message: "Product Deleted Successfully !" });
    });
}

export const updateProduct = (req,res) => {
    const id = req.params.id;
    const { product_title, price, stock, category, description, image} = req.body;
    const q = `UPDATE product SET product_title=?, price=?, stock=?, category=?, description=?, image=? WHERE idproduct=?`;
    db.query(q,[product_title,price,stock,quantity,description,image],(err,result) => {
        if (err) return res.send(err);
        return res.send({result, message:"product updated successfully!"});
    });
    // const [result]=db.query(q,[product_title,price,stock,quantity,description,image]);
    // res.status(200).json({message:"Product Updated Succesfully!",result})

    //  } catch (error) {
    //   console.log(error)
    //   res.staus(500).json({message:"error in update product",error:error},);
    // }

    
}