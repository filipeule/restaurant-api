import express from 'express';

import {
  httpGetWeekMenus,
  httpCreateMenu,
  httpCreateWeekMenus,
  httpEditMenu,
  httpDeleteMenu
} from '../../controllers/menus.controller.js'

const menusRouter = express.Router();

menusRouter.get('/', httpGetWeekMenus);
menusRouter.post('/', httpCreateMenu);
menusRouter.post('/week', httpCreateWeekMenus);
menusRouter.put('/:id', httpEditMenu);
menusRouter.delete('/:id', httpDeleteMenu);

export default menusRouter;