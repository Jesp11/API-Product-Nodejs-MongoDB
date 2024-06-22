const express = require('express');
const router = express.Router();

import getProduct from '../controller/getProduct.js';
import getAllProducts from '../controller/getAllProducts.js';
import createProduct from '../controller/createProduct.js';
import updateProduct from '../controller/updateProduct.js';
import deleteProduct from '../controller/deleteProduct.js';

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;