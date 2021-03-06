module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
      },
      abstract: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      bookmark_count: {
        type: Sequelize.INTEGER,
      },
      likes_count: {
        type: Sequelize.INTEGER,
      },
      is_reported: {
        type: Sequelize.BOOLEAN,
      },
      is_draft: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: queryInterface => queryInterface.dropTable('Articles'),
};
