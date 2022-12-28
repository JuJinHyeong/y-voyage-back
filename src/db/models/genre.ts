import { Sequelize, DataTypes, Model } from 'sequelize';

export class Genre extends Model {
  declare id: number;
  declare name: string;
}

export const initialize = (sequelize: Sequelize) => {
  Genre.init(
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
      },
    },
    {
      sequelize,
      modelName: 'genre',
      timestamps: false,
      charset: 'utf8mb4',
      freezeTableName: true,
    },
  );
};
