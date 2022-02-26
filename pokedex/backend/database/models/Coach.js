module.exports = (sequelize, DataTypes) => {
    
const Coach = sequelize.define("Coach",
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
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
 
},{
    tableName: "Coach"
})
return Coach;
}