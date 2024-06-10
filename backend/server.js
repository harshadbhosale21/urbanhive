import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'
import ConnectDB from './db.js';
import { fileURLToPath } from 'url';
import storeRoutes from './routes/storeRoutes.js';
import userRoutes from './routes/userRoutes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();

ConnectDB();

app.use(express.json());
app.use(cors());

app.use('/assests', express.static(path.join(__dirname, 'assests')));

app.use('/store', storeRoutes);
app.use('/user', userRoutes);




const Port = process.env.PORT;
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`)
})
