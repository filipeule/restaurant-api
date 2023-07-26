import menusDb from '../db/menus.db.js';
import productsDb from '../db/products.db.js';

import { getGroupIdByName } from '../models/groups.model.js';

async function getWeekMenus() {
  try {
    return await menusDb
      .find({}, { '__v': 0 })
      .populate({
        path: 'meats',
        select: '-__v',
        populate: {
          path: 'group',
          select: '-__v',
        }
      })
      .populate({
        path: 'sideOrders',
        select: '-__v',
        populate: {
          path: 'group',
          select: '-__v',
        }
      })
      .populate({
        path: 'salad',
        select: '-__v',
        populate: {
          path: 'group',
          select: '-__v',
        }
      });
  } catch (error) {
    throw new Error(error);
  }
}

async function createWeekMenus() {
  try {
    const date = new Date();

    if (await verifyCreatedWeekMenus(date)) throw new Error(`There's already menus generated for this week.`);

    const weekMenus = await generateWeekMenus(date);

    await menusDb.insertMany(weekMenus);

    return weekMenus;
  } catch (error) {
    throw new Error(error);
  }
}

async function generateWeekMenus(date) {
  const menusArray = [];

  const dayOfWeek = date.getDay();

  if (dayOfWeek === 6) {
    date.setDate(date.getDate() + 2);
  } else if (dayOfWeek === 0) {
    date.setDate(date.getDate() + 1);
  }

  for (let i = 0; i <= 5 - date.getDay(); i++) {
    const menuDate = new Date(date);

    menuDate.setDate(menuDate.getDate() + i);

    let newMenu = await generateRandomMenu(menuDate);
    
    menusArray.push(newMenu);
  }

  return menusArray;
}

async function generateRandomProduct(group) {
  const countProducts = await productsDb.countDocuments({ group: await getGroupIdByName(group) });

  const randomNumber = Math.floor(Math.random() * countProducts);

  const randomProduct = await productsDb.findOne({ group: await getGroupIdByName(group) }).skip(randomNumber);

  return randomProduct._id;
}

async function generateRandomMenu(date) {
  const menu = {
    meats: [
      await generateRandomProduct('Beef'),
      await generateRandomProduct('Poultry'),
      await generateRandomProduct('Pork'),
    ],
    sideOrders: [
      await generateRandomProduct('Broth'),
      await generateRandomProduct('Pasta'),
      await generateRandomProduct('Legumes'),
    ],
    salad: [
      await generateRandomProduct('Vegetable'),
      await generateRandomProduct('Leaf Vegetable'),
    ],
    date: date.toDateString(),
  };

  return menu;
}

async function verifyCreatedWeekMenus(date) {
  try {
    const startOfTheWeek = new Date(date);
    const endOfTheWeek = new Date(date);
  
    startOfTheWeek.setHours(0, 0, 0, 0 - date.getDay() * 24 * 60 * 60 * 1000);
  
    endOfTheWeek.setHours(23, 59, 59, 999);
    endOfTheWeek.setDate(date.getDate() + (6 - date.getDay()));
  
    const menuCount = await menusDb.countDocuments({
      date: {
        $gte: startOfTheWeek,
        $lte: endOfTheWeek,
      }
    });
  
    if (menuCount > 0) return true;
  
    return false;
  } catch (error) {
    throw new Error(error);
  }
}

export {
  getWeekMenus,
  createWeekMenus,
};