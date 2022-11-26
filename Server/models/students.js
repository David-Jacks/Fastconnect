module.exports = (sequelize, DataTypes) =>{
    const Students = sequelize.define("Students", {
        stu_ID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stuEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stuDoB: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stuProgramme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stuGender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stuLevel: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }) 
        return Students;
};


