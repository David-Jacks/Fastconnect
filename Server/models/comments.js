module.exports = (sequelize, DataTypes) =>{
     const Comments = sequelize.define("Comments", {
        CommentUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CommentBody:{
            type: DataTypes.STRING,
            allowNull: false
        }
 
    })
    return Comments;
}