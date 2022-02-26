module.exports = (sequelize, DataTypes) => {
    const Legendary = sequelize.define("Legendary", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),            
        },
        description: {
            type: DataTypes.STRING(100),
        },
        type: {
            type: DataTypes.STRING(100),
        },
        healthPoints: {
            type: DataTypes.FLOAT,
        },
        specialAttack: {
            type: DataTypes.FLOAT,
        },
        defense: {
            type: DataTypes.FLOAT,
        },
        attack: {
            type: DataTypes.FLOAT,
        },
        experience: {
            type: DataTypes.FLOAT,
        },
        specialDefense:{
            type: DataTypes.FLOAT,
        },
        url: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'legendaries',
    }
    );
    return Legendary;
};