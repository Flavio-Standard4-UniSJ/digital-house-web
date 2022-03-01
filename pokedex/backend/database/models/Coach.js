module.exports = (sequelize, DataTypes) => {
    
const Coach = sequelize.define("coach",
{
    id:{ 
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    email: { 
        type: DataTypes.STRING(100),
        unique: true
    },
    senha: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: "coach"
});
return Coach;
}