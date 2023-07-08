import express from 'express';
import helmet from 'helmet';
import 'dotenv/config'

import api from './routes/api.js'

const app = express();

app.use(helmet());

app.use(express.json());

app.use('/v1', api);

export default app;