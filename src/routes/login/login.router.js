import express from 'express';

import {
  httpLogin,
} from '../../controllers/login.controller.js';

const loginRouter = express.Router();

loginRouter.post('/', httpLogin);

export default loginRouter;