import express from 'express';
import productsRouter from './products/products.router.js';
import menusRouter from './menus/menus.router.js';
import loginRouter from './login/login.router.js';
import loginRequired from '../middlewares/login.middleware.js';

const api = express.Router();

api.use('/products', loginRequired, productsRouter);
api.use('/menus', menusRouter);
api.use('/login', loginRouter);

export default api;