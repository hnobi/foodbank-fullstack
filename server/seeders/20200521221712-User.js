'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Users",
        [
          {
            username: "Test Boy",
            email: "test@theagromall.com",
            password: "password",
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            username: "Hammed Noibi",
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
