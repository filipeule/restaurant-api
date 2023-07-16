import productsDb from '../db/products.db.js';
import groupsDb from '../db/groups.db.js';

async function getAllProducts() {
  try {
    return await productsDb
      .find({}, { '__v': 0 })
      .populate('group', '-__v')
      .sort({ name: 1 });
  } catch (error) {
    throw new Error(error);
  }
}

async function getProductById(id) {
  try {
    return await productsDb.findById(id, 'name group').populate('group', '-__v');
  } catch (error) {
    throw new Error(error);
  }
}

async function addNewProduct(product) {
  try {
    if (!validateProduct(product)) return;

    capitalizeFirstLetter(product);

    const productGroup = await groupsDb.findOne({ name: product.group });

    product.group = productGroup;

    if (!product.group) return;

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

    capitalizeFirstLetter(product);

    const productGroup = await groupsDb.findOne({ name: product.group });

    product.group = productGroup;

    if (!product.group) return;
  
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

function capitalizeFirstLetter(product) {
  const wordsArray = product.group.split(' ');

  const capitalizeArray = wordsArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  product.group = capitalizeArray.join(' ');
}

export {
  getAllProducts,
  getProductById,
  addNewProduct,
  editProduct,
  deleteProduct,
};