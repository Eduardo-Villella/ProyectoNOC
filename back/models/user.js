const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Matricula, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'User',
  });
  return User;
};
