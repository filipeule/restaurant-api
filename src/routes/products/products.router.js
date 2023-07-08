import express from 'express';
import {
  httpGetAllProducts,
  httpGetProduct,
  httpAddNewProduct,
  httpEditProduct,
  httpDeleteProduct
} from '../../controllers/products.controller.js';

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.get('/:id', httpGetProduct);
productsRouter.post('/', httpAddNewProduct);
productsRouter.put('/:id', httpEditProduct);
productsRouter.delete('/:id', httpDeleteProduct);

export default productsRouter;