module.exports = (sequelize, DataTypes) =>{
    const Staff = sequelize.define("Staff", {
        sta_ID: {
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
        staEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        staDoB: {
            type: DataTypes.DATE,
            allowNull: false
        },
        staDepartment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        staGender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }) 
        return Staff;
};


