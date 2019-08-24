// yarn sequelize db:migrate -> migrate nova.
// Roda apenas a nova, o SequelizeMeta sabe quais migrates ja foram executadas.

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' }, // model = tabela
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  }
};
