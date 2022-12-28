import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initialize as modelInitialze } from './models';
dotenv.config();

export const initialize = async () => {
  const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  await sequelize.authenticate();
  console.log('connection ok');
  modelInitialze(sequelize);

  await sequelize.sync();
  console.log('sequlize sync');
};
