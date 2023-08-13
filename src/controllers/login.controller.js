import * as loginModel from '../models/login.model.js';

async function httpLogin(req, res) {
  try {
    if (!req.body.email || !req.body.password) return res.status(400).json({ error: 'Login properties required' });

    const login = {
      email: req.body.email,
      password: req.body.password,
    };

    const token = await loginModel.generateToken(login);

    if (!token) return res.status(401).json({ error: 'Invalid credencials'});

    return res.status(201).json({ token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong. Please try again or contact the support team.' });
  }
}

export {
  httpLogin,
};