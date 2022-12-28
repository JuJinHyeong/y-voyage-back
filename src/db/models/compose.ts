import { Sequelize, DataTypes, Model } from 'sequelize';
import { Artist } from './artist';
import { Song } from './song';

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
        references: {
          model: Artist,
          key: 'id',
        },
      },
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: Song,
          key: 'id',
        },
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
