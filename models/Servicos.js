import { Sequelize } from "sequelize"
import connection from "../config/db.js"
import Agendamento from "./Agendamento.js";
import User from "./User.js";

const Servicos = connection.define(
    'servicos',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey:true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idAgendamento: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'agendamento',
                key: 'id'
            }
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
);

Servicos.belongsTo(Agendamento, {
    foreignKey: 'idAgendamento'
});

Servicos.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Servicos ;

