const { sequelize } = require("../config/database");

module.exports = (sequelize,DataTypes) => {

var Books = sequelize.define('books',{
    id:{
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement:true
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
   

})

//Books.sync( { force:true } )

return Books

}