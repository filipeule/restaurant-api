import * as menuModel from '../models/menus.model.js';

async function httpGetWeekMenus(req, res) {
  try {
    const weekMenus = await menuModel.getWeekMenus();
    
    return res.status(200).json(weekMenus);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong. Please try again or contact the support team.' });
  }
}

async function httpCreateWeekMenus(req, res) {
  try {
    const weekMenus = await menuModel.createWeekMenus();
    
    return res.status(201).json(weekMenus);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
}

async function httpCreateMenu(req, res) { }

async function httpEditMenu(req, res) { }

async function httpDeleteMenu(req, res) { }

export {
  httpGetWeekMenus,
  httpCreateMenu,
  httpCreateWeekMenus,
  httpEditMenu,
  httpDeleteMenu
}