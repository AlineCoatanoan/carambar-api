import { Model, DataTypes } from "sequelize";

export class Joke extends Model {
  static initModel(sequelize) {
    Joke.init(
      {
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Joke",
        tableName: "jokes",
        timestamps: true,
      }
    );
    return Joke;
  }
}
