import loginDb from '../db/login.db.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function generateToken(login) {
  const { email, password } = login;

  const user = await loginDb.findOne({ email: email });

  if (!user) return;

  const passwordHash = user.password;

  const isValid = await passwordIsValid(password, passwordHash);

  if (!isValid) return;

  const token = jwt.sign({ email }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return token;
}

async function passwordIsValid(password, passwordHash) {
  return await bcryptjs.compare(password, passwordHash);
}

export {
  generateToken,
}