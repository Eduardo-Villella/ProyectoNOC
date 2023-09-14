const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Curso.hasMany(models.Matricula, {
        foreignKey: 'cursoId',
        sourceKey: 'id',
      });
      models.Curso.belongsTo(models.Nivel, {
        foreignKey: 'idnivel',
        target: 'id',
      });
    }
  }
  Curso.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    capacidad: DataTypes.INTEGER,
    idnivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'idnivel',
    },
    requisitos: DataTypes.TEXT,
    habilitado: DataTypes.BOOLEAN,
    fechaInicio: DataTypes.DATE,
    fechafin: DataTypes.DATE,
    idusuarioalta: DataTypes.INTEGER,
    estado: DataTypes.BOOLEAN,
    idusuariomodificacion: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};
