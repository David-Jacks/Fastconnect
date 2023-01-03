module.exports = (sequelize, DataTypes) =>{
        const Post = sequelize.define("Post", {
            postID: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            postHead: {
                type: DataTypes.STRING,
                allowNull: false
            },
            postBody: {
                type: DataTypes.STRING,
                allowNull: false
            },
            postUser: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }) 
            return Post;
};


