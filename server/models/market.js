'use strict';
module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define(
    "Market",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
    },
    {}
  );
  Market.associate = function(models) {
    // associations can be defined here

    Market.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Market;
};