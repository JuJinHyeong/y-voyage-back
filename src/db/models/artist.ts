import { Sequelize, DataTypes, Model } from 'sequelize';

export class Artist extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
}

export const initialize = (sequelize: Sequelize) => {
  Artist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: 'artist',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
