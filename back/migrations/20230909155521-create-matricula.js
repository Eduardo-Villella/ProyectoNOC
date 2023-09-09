'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            // schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      cursoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Cursos',
            // schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matriculas');
  }
};