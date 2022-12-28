import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import routers from './routes';
import { initialize as dbInitialize } from './db';

dotenv.config();

console.log(process.env.NODE_ENV);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/song', routers.songRouter);

if (process.env.NODE_ENV === 'dev') {
  app.use('/heartbeat', routers.heartbeatRouter);
}
app.use('/error', () => console.log('error'));

const appInitialize = async () => {
  await dbInitialize();
};

appInitialize()
  .then(() => {
    app.listen(process.env.PORT || '3000', () => {
      console.log('server start');
    });
  })
  .catch((err) => {
    console.log(err);
  });
