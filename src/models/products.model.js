import productsDb from '../db/products.db.js';

async function getAllProducts() {
  try {
    return await productsDb
      .find({}, { '__v': 0 })
      .sort({ name: 1 });
  } catch (error) {
    throw new Error(error);
  }
}

async function getProductById(id) {
  try {
    return await productsDb.findById(id, 'name group');
  } catch (error) {
    throw new Error(error);
  }
}

async function addNewProduct(product) {
  try {
    if (!validateProduct(product)) return;
  
    return await productsDb.findOneAndUpdate({
      name: product.name,
    }, product, {
      upsert: true,
      new: true,
      select: '-__v'
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function editProduct(id, product) {
  try {
    if (!validateProduct(product)) return;
  
    return await productsDb.findByIdAndUpdate(id, product, {
      new: true,
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteProduct(id) {
  try {
    return await productsDb.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

function validateProduct(product) {
  const newProduct = trimProduct(product);

  if (!isNaN(newProduct.name) || !isNaN(newProduct.group)) return;

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