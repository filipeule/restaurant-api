import jwt from 'jsonwebtoken';
import loginDb from '../db/login.db.js';

export default async function (req, res, next) {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ error: 'Login required.' });
  
    const [text, token] = authorization.split(' ');
    
    const data = jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: 'Invalid credentials.' });
      }

      return decoded;
    });

    const { email } = data;

    const login = await loginDb.findOne({ email: email });

    if (!login) return res.status(401).json({ error: 'Invalid login.' });

    req.userEmail = email;

    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong. Please try again or contact the support team.' });
  }
}