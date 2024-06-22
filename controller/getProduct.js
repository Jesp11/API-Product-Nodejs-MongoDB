import Product from "../model/product.js";

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default getProduct;
