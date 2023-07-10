import * as productModel from '../models/products.model.js';

async function httpGetAllProducts(req, res) {
  const products = await productModel.getAllProducts();

  return res.status(200).json(products);
}

async function httpGetProduct(req, res) {
  const id = req.params.id;

  const product = await productModel.getProductById(id);
  
  return res.status(200).json(product);
}

async function httpAddNewProduct(req, res) {
  if (!req.body.name || !req.body.type) return res.status(400).json({ error: 'Product properties required.'});

  const productBody = {
    name: req.body.name,
    type: req.body.type,
  }

  const product = await productModel.addNewProduct(productBody);

  return res.status(201).json(product);
}

async function httpEditProduct(req, res) {
  const id = req.params.id;

  if (!req.body.name || !req.body.type) return res.status(400).json({ error: 'New product properties required.'});

  const product = {
    name: req.body.name,
    type: req.body.type,
  }

  await productModel.editProduct(id, product);

  return res.status(204).json();
}

function httpDeleteProduct(req, res) {
  return res.status(200).send(`Deleting product with id: ${req.params.id}`)
}

export {
  httpGetAllProducts,
  httpGetProduct,
  httpAddNewProduct,
  httpEditProduct,
  httpDeleteProduct
}