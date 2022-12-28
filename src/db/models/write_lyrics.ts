import { Sequelize, DataTypes, Model } from 'sequelize';

export interface IWriteLyrics {
  artist_id: number;
  song_id: number;
}

export class WriteLyrics extends Model {
  declare artist_id: number;
  declare song_id: number;
}

export const initialize = (sequelize: Sequelize) => {
  WriteLyrics.init(
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
      modelName: 'write_lyrics',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
