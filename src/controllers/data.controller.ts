import { Request, Response } from 'express';
import { processInputData } from '../services/data.service';

export const processData = (req: Request, res: Response) => {
  try {
    const result = processInputData(req.body.data);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: 'Internal Server Error'
    });
  }
};
