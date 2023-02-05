'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Users", "RoleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Roles",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
    
    await queryInterface.addColumn("Roles", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });

    await queryInterface.addColumn("Products", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });

    await queryInterface.addColumn("Orders", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });

    await queryInterface.addColumn("Orders", "ItemId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Items",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });


    await queryInterface.addColumn("Items", "ProductId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Products",
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });

    await queryInterface.addColumn("Items", "price", {
      type: Sequelize.INTEGER,
      references: {
        model: "Products",
        key: "price",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Users", "RoleId", {}),
    await queryInterface.removeColumn("Roles", "UserId", {}),
    await queryInterface.removeColumn("Products", "UserId", {}),
    await queryInterface.removeColumn("Orders", "UserId", {}),
    await queryInterface.removeColumn("Orders", "ItemId", {}),
    await queryInterface.removeColumn("Items", "ProductId", {})
    await queryInterface.removeColumn("Items", "Price", {})
  }
};