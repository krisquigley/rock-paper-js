'use strict';
module.exports = function(sequelize, DataTypes) {
  var Move = sequelize.define('Move', {
    myMove: DataTypes.STRING,
    theirMove: DataTypes.STRING,
    win: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Move;
};