import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import errorHandler from './utils/error-middleware.js';
import helmet from 'helmet';
import compression from 'compression';

import userRouter from './resources/user/user.router.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression()); // Compress all routes

// Routes
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Express Boilerplate' });
});

// Handle 404
app.use((req, res, next) => {
  res.status(404);
  throw new Error('Not found');
});

// Error handler
app.use(errorHandler);
export default app;
