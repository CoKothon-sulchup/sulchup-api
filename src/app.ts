import dotenv from 'dotenv';
import express from 'express';

import * as controllers from './controllers';

dotenv.config();


const app = express();

app.set('port', process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/note', controllers.note);
app.use('/user', controllers.user);

app.get('/ping', (_, res) => {
  res.send('pong');
})

export { app };
