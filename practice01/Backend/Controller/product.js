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
