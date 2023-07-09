import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config'

import api from './routes/api.js'

const app = express();

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

app.use('/v1', api);

export default app;