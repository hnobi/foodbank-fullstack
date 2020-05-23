'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Users",
        [
          {
            name: "Test Boy",
            email: "test@theagromall.com",
            password: "password",
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Hammed Noibi",
            email: "hammed@theagromall.com",
            password: "password",
            isAdmin: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],

        {}
      );
  
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
