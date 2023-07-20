import express from 'express';
import productsRouter from './products/products.router.js';
import menusRouter from './menus/menus.router.js';

const api = express.Router();

api.use('/products', productsRouter);
api.use('/menus', menusRouter);

export default api;