'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        "Markets",
        [
          {
            name: "Oja oyingbo",
            address: "23, oyingbo street alimosho",
            description: "blah blah",
            userId: 1,
            images: [
              "https://cdn.pixabay.com/photo/2016/11/19/20/55/apples-1841132__340.jpg",
              "https://cdn.pixabay.com/photo/2018/06/10/17/40/olives-3466908__340.jpg",
              "https://image.shutterstock.com/image-photo/female-stall-holder-farmers-fresh-600w-267549425.jpg",
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Markets', null, {})
};
