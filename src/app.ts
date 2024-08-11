import express, { Application } from 'express';
import router from './routes/index.js';

const app:Application = express();

app.use(express.json());
app.use('/', router);

export default app;