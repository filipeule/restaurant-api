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
  if (!validateProduct(product)) return;
  
  return await productsDb.findOneAndUpdate({
    name: product.name,
  }, product, {
    upsert: true,
    new: true,
    select: '-__v'
  });
}

async function editProduct(id, product) {
  if (!validateProduct(product)) return;
  
  return await productsDb.findByIdAndUpdate(id, product, {
    new: true,
  });
}

async function deleteProduct(id) {
  return await productsDb.findByIdAndDelete(id);
}

function validateProduct(product) {
  const newProduct = trimProduct(product);

  if (!isNaN(newProduct.name) || !isNaN(newProduct.type)) return;

  return newProduct;
}

function trimProduct(product) {
  for (let key in product) {
    product[key] = product[key].trim();
  }

  return product;
}

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};