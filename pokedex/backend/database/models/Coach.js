module.exports = (sequelize, DataTypes) => {
    
const Coach = sequelize.define("coach",
{
    id:{ 
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: { 
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    perfil: {
        type: DataTypes.STRING,
        allowNull: false
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