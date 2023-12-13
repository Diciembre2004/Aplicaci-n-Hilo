import express from 'express';
import { getUser, getRecor, getRecorCount, saveRecor, deleteRecor, updateRecor } from './controllers/proyecto.js';

const app = express();

app.use(getRecor)

export default app