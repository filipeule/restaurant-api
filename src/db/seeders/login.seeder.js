import bcryptjs from 'bcryptjs';
import loginDb from '../login.db.js';

async function loginSeeder() {
  try {
    const login = {
      email: process.env.USER_EMAIL,
      password: await bcryptjs.hash(process.env.USER_PASSWORD, 8),
    };
    
    await loginDb.findOneAndUpdate({
      email: login.email,
    }, login, {
      upsert: true,
    });

    console.log('Populate logins are ready!');
  } catch (error) {
    throw new Error('Cannot populate logins in MongoDB.', error)
  }
}

export default loginSeeder;