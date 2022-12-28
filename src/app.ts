import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.set('port', process.env.PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (_, res) => {
  res.send('pong');
})

export { app };
