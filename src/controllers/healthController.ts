// src/controllers/healthController.ts
import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('Together, We Prosper');
};

export const health = (req: Request, res: Response) => {
  res.send('Green');
};
