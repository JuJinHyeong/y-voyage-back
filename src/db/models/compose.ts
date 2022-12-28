import { Sequelize, DataTypes, Model } from 'sequelize';

export interface ICompose {
  artist_id: number;
  song_id: number;
}

export class Compose extends Model {
  declare artist_id: number;
  declare song_id: number;
}

export const initialize = (sequelize: Sequelize) => {
  Compose.init(
    {
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'compose',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
