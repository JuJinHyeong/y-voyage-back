import { Sequelize, DataTypes, Model } from 'sequelize';
import { Song } from './song';

export interface ILyrics {
  id: number;
  song_id: number;
  time: number;
  value: string;
}

export class Lyrics extends Model {
  declare id: number;
  declare song_id: number;
  declare time: number;
  declare value: string;
}

export const initialize = (sequelize: Sequelize) => {
  Lyrics.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Song,
          key: 'id',
        },
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'lyrics',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
