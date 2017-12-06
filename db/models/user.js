'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    access_token: DataTypes.STRING,
    verification_token: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: { associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
