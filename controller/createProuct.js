import Product from "../model/product.js";

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const product = new Product({
      name,
      description,
      price,
      category,
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default createProduct;
