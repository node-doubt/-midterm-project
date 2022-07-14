'use strict';

const userSchema = (sequelize, DataTypes) => {
  const model =  sequelize.define('user', {
    userId : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apiToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return model
};

module.exports = userSchema;