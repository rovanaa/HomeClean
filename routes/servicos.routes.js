import express from "express";
import Servicos from '../models/Servicos.js';
import Agendamento from '../models/Agendamento.js';
import User from "../models/User.js";

const servicos = express.Router();

servicos.get('/', (req, res) => {
    res.send('Rota de Serviços');
});

servicos.post("/register", async (req, res) => {

    const { idUser, idAgendamento, optServ, optLocal, optAdic, optData,  text } = req.body;

    const alreadyExistsServicos = await Servicos.findOne({ where: { idUser, idAgendamento } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsServicos) {
        return res.status(409).json({ message: "Serviço já cadastrado!" });
    }

    const newServicos = new Servicos({ idUser, idRestaurant, optServ, optLocal, optAdic, optData,  text });
    const savedServicos = await newServicos.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Desculpa! Não foi possível concluir o Serviço." });
    });

    if (savedServicos) res.json({ message: "Novo Serviço Agendado!" });
});

servicos.get('/findByAgendamento', async (req, res) => {
    const idAgendamento = req.query.idAgendamento;
    const servicos = await Servicos.findAll({
        where: {
            idAgendamento: idAgendamento
        },
        include: [{ model: User }]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (servicos) {
        return res.json({ servicos })
    } else {
        return null
    }
})

servicos.get('/findByUser', async (req, res) => {
    const idUser = req.query.idUser;
    const servicos = await Servicos.findAll({
        where: {
            idUser: idUser
        },
        include: [{ model: Agendamento }]
    }).catch(
        (err) => {
            console.log(err)
        }
    );

    if (servicos) {
        return res.json({ servicos })
    } else {
        return null
    }
})

export default servicos;