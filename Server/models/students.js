 module.exports = (sequelize, DataTypes) =>{
    const Students = sequelize.define("Students", {
       stuID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stuEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  studob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  programme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stugender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stulevel: {
    type: DataTypes.STRING,
    allowNull: false,
   }
  })
    return Students;
};

