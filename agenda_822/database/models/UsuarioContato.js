module.exports = (sequelize, Datatypes) => {
    const UsuarioContato = sequelize.define("UsuarioContato", {
        id: {
            type: Datatypes.STRING(100),
            primaryKey: true
          },
          fk_id_usuario: {
            type: Datatypes.STRING(100),
            allowNull: false,
            references: {
              model: 'Usuario',
              key: 'id'
            }
          },
          fk_id_contato: {
            type: Datatypes.STRING(100),
            allowNull: false,
            references: {
              model: 'Contato',
              key: 'id'
            }
          },
          createdAt: {
            type: Datatypes.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Datatypes.DATE,
            allowNull: false,
          },
    }, {
        tableName: 'UsuarioContato',
    });

    return UsuarioContato
}