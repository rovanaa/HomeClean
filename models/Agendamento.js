import { Sequelize } from "sequelize";
import connection from '../config/db.js';
import User from '../models/User.js'

const Agendamento = connection.define(
    'agendamento',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        optServ: {
            type: Sequelize.STRING,
            allowNull: false
        },
        optLocal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        optAdic: {
            type: Sequelize.STRING,
            allowNull: true
        },
        optData: {
            type: Sequelize.STRING,
            allowNull: false
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    }
);

Agendamento.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Agendamento;