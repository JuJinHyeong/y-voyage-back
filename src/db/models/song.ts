import { Sequelize, DataTypes, Model } from 'sequelize';
import { Album } from './album';

export class Song extends Model {
  declare id: number;
  declare album_id: number;
  declare title: string;
  declare youtube_url: string;
  declare melon_url: string;
  declare genie_url: string;
  declare bugs_url: string;
  declare lyrics: any[];
}

export const initialize = (sequelize: Sequelize) => {
  Song.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: Album,
        //   key: 'id',
        // },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      youtube_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      melon_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      genie_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      bugs_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      lyrics: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: '[]',
      },
    },
    {
      sequelize,
      modelName: 'song',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
