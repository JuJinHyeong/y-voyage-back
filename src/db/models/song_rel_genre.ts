import { Sequelize, DataTypes, Model } from 'sequelize';

export interface ISongRelGenre {
  song_id: number;
  genre_id: number;
}

export class SongRelGenre extends Model {
  declare song_id: number;
  declare genre_id: number;
}

export const initialize = (sequelize: Sequelize) => {
  SongRelGenre.init(
    {
      song_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'song_rel_genre',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
