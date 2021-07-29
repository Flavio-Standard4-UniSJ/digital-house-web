module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define("Contato", 
        {
            id: {
                type: DataTypes.STRING(100),
                primaryKey: true,
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            sexo: {
                type: DataTypes.STRING(100),
            },
            endereco: {
                type: DataTypes.TEXT,
            },
            telefone: {
                type: DataTypes.STRING(12),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            profissao: {
                type: DataTypes.STRING(100)
            },
            avatar: {
                type: DataTypes.TEXT
            },
            createdAt: {
              type: DataTypes.DATE,
              allowNull: false,
            },
            updatedAt: {
              type: DataTypes.DATE,
              allowNull: false,
            }
        },
        {
            tableName: 'Contato',
        }
    ); 
    return Contato
}