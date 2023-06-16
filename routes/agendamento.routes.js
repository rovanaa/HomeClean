import express from "express";
import Agendamento from '../models/Agendamento.js';

const agendamento = express.Router();

agendamento.get('/', (req, res) => {
    res.send('Rota de Agendamento');
});

agendamento.post("/register", async (req, res) => {
    
    const { optServ, optLocal, optAdic, optData, text } = req.body;

    const alreadyExistsAgendamento = await Agendamento.findOne({ where: { optServ } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsAgendamento) {
        return res.status(409).json({ message: "Serviço já agendado!" });
    }

    const newAgendamento = new Agendamento({ optServ, optLocal, optAdic, optData, text });
    const savedAgendamento = await newAgendamento.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Desculpa! Não foi possível concluir o agendamento." });
    });

    if (savedAgendamento) res.json({ message: "Novo agendamento realizado!" });
});

agendamento.get('/find', async (req, res) => {
    const agendamentos = await Restaurant.findAll().catch(
        (err) => {
            console.log(err)
        }
    );

    if (agendamentos){
        return res.json({agendamentos})
    } else {
        return null
    }
})

export default agendamento;