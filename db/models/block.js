'use strict';
module.exports = (sequelize, DataTypes) => {
  var Block = sequelize.define('Block', {
    created_at: DataTypes.DATE,
    title: DataTypes.STRING,
    duration: DataTypes.STRING,
    paused_at: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Block;
};