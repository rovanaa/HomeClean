import express from "express";
import Agendamento from '../models/Agendamento.js';
import User from "../models/User.js";

const agendamento = express.Router();

agendamento.get('/', (req, res) => {
    res.send('Rota de Agendamento');
});

agendamento.post("/register", async (req, res) => {

    const { optServ, optLocal, optAdic, optData, text, idUser } = req.body;

    const alreadyExistsAgendamento = await Agendamento.findOne({ where: { idUser, optData } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsAgendamento) {
        return res.status(409).json({ message: "Serviço já agendado!" });
    }

    const newAgendamento = new Agendamento({ optServ, optLocal, optAdic, optData, text, idUser });
    const savedAgendamento = await newAgendamento.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Desculpa! Não foi possível concluir o agendamento." });
    });

    if (savedAgendamento) res.json({ message: "Novo agendamento realizado!" });
});

agendamento.get('/find', async (req, res) => {
    const agendamentos = await Agendamento.findAll({ include: [{ model: User }] }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (agendamentos) {
        return res.json({ agendamentos })
    } else {
        return null
    }
})

agendamento.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const agendamentos = await Agendamento.findAll({
        where: {
            idUser: idUser
        }, include: [{ model: User }]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (agendamentos) {
        return res.json({ agendamentos })
    } else {
        return null
    }
})

export default agendamento;