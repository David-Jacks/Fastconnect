 module.exports = (sequelize, DataTypes) =>{
    const Students = sequelize.define("Students", {
       stuID: {
    type: DataTypes.INTEGER,
    validate: {
        isInt: {
            msg: "invalid Id"
        }
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "First name is required"
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Last name is required"
      }
    }
  },
  stuEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Invalid email format"
      }
    }
  },
  studob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Invalid date format"
      }
    }
  },
  programme: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Programme is required"
      }
    }
  },
  stugender: {
    type: DataTypes.ENUM("male", "female"),
    allowNull: false,
    validate: {
      isIn: {
        args: [["male", "female"]],
        msg: "Invalid gender"
      }
    }
  },
  stulevel: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: {
          msg: "Level is required"
        }
      }}
  })
    return Students;
};

