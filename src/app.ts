// src/app.ts
import express from 'express';
import healthRoutes from './routes/healthRouter'

const app = express();


app.use(express.json());

app.use(healthRoutes);

export default app;
