import http from 'http';
import app from './app.js';

import * as mongo from './services/mongo.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

try {
  await mongo.startDatabase();

  server.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(error.message);
}