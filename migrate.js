import connection from "./config/db.js";
import User from "./models/User.js";
import Agendamento from "./models/Agendamento.js";
import Servicos from "./models/Servicos.js";

const migrate = async () => {
    try {
       const result = await connection.sync(); 
       console.log(result);
    } catch (error) {
        console.log(error);
    }
}

migrate();