module.exports = (sequelize, DataTypes) => {
    const CoachesLegendaries = sequelize.define("coaches_legendaries", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        coach_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
                model: 'Coach',
                key: 'id'
            }            
        },
        legendary_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refereces: {
                model: 'Legendary',
                key: 'id'
            }            
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName: 'coaches_legendaries',
        timestamps: false
    }
    );
    return CoachesLegendaries;
};