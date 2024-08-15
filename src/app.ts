import express, { Application } from 'express';
import dummy from './routes/dummy.route'


export const app: Application = express();

app.use(express.json());
app.use('/', dummy);


