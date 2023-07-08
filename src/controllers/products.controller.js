function httpGetAllProducts(req, res) {
  return res.status(200).send('Getting all the products');
}

function httpGetProduct(req, res) {
  return res.status(200).send(`Getting the product with id: ${req.params.id}`);
}

function httpAddNewProduct(req, res) {
  return res.status(201).send('Creating a new product');
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