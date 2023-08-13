import mongoose from 'mongoose';
import { populateGroupsCollection } from '../models/groups.model.js';
import loginSeeder from '../db/seeders/login.seeder.js';

const MONGO_URL = process.env.MONGO_URL;

async function startDatabase() {
  await connect();
  
  await populateGroupsCollection();

  await loginSeeder();
}

async function connect() {
  await mongoose.connect(MONGO_URL);
}

async function disconnect() {
  await mongoose.disconnect();
}

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.once('close', () => {
  console.log('MongoDB connection closed!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export {
  startDatabase,
  connect,
  disconnect,
}