import { Sequelize } from "sequelize";
import connection from '../config/db.js';

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
        }
    }
)

export default Agendamento;