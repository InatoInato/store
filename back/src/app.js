import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import models from './models/models.js'
import router from './routes/index.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api', router)


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>console.log(`Runned in port: ${PORT}`));
    }
    catch(err){
        console.log(err);
    }
}

start();