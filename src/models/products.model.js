import productsDb from '../db/products.db.js';

async function getAllProducts() {
  return await productsDb
    .find({}, { '__v': 0 })
    .sort({ name: 1 });
}

async function getProductById(id) {
  return await productsDb.findById(id, 'name type');
}

async function addNewProduct(product) {
  await saveProduct(product);
}

function editProduct() { }

function deleteProduct() { }

async function saveProduct(product) {
  await productsDb.findOneAndUpdate({
    name: product.name,
  }, product, {
    upsert: true,
  });
}

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};