import { Sequelize, DataTypes, Model } from 'sequelize';

export interface IAlbum {
  id: number;
  title: string;
  release: Date;
  publisher: string;
  agency: string;
  description: string;
  img_url: string;
}

export class Album extends Model {
  declare id: number;
  declare title: string;
  declare release: Date;
  declare publisher: string;
  declare agency: string;
  declare description: string;
  declare img_url: string;
}

export const initialize = (sequelize: Sequelize) => {
  Album.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      release: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      img_url: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'album',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
