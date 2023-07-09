import productsDb from '../db/products.db.js'

function getAllProducts() {}

function getProduct() {}

async function addNewProduct(product) {
  await saveProduct(product);
}

function editProduct() {}

function deleteProduct() {}

async function saveProduct(product) {
  await productsDb.findOneAndUpdate({
    name: product.name,
  }, product, {
    upsert: true,
  });
}

export {
  getAllProducts,
  getProduct,
  addNewProduct,
  editProduct,
  deleteProduct,
}