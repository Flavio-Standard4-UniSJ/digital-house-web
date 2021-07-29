  
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", 
        {
            id: {
                type: DataTypes.STRING(100),
                primaryKey: true,
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            cpf: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            senha: {
                type: DataTypes.VIRTUAL,
                allowNull: false,
            },
            senha_hash: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            pin: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
            },
            profissao: {
                type: DataTypes.STRING(100),
            },
            salario: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            avatar: {
                type: DataTypes.TEXT,
            },
            tipo_usuario: {
                type: DataTypes.STRING,
                defaultValue: 'cliente',
                allowNull: false,
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
            tableName: 'Usuario',
        }
    ); 
 
    Usuario.addHook('beforeSave', async Usuario => {
        if(Usuario.senha) {
            Usuario.senha_hash = await bcrypt.hash(Usuario.senha, 12);
        }
    });

    return Usuario
}