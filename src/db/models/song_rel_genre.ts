import { Sequelize, DataTypes, Model } from 'sequelize';
import { Genre } from './genre';
import { Song } from './song';

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
        references: {
          model: Song,
          key: 'id',
        },
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: Genre,
          key: 'id',
        },
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
