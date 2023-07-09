import * as productModel from '../models/products.model.js';

function httpGetAllProducts(req, res) {
  return res.status(200).send('Getting all the products');
}

function httpGetProduct(req, res) {
  return res.status(200).send(`Getting the product with id: ${req.params.id}`);
}

async function httpAddNewProduct(req, res) {
  const product = req.body;

  if (!product.name || !product.type) return res.status(400).json({ error: 'Product properties required.'});

  await productModel.addNewProduct(product);

  return res.status(201).json(product);
}

function httpEditProduct(req, res) {
  return res.status(204).send(`Editing product with id: ${req.params.id}`)
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