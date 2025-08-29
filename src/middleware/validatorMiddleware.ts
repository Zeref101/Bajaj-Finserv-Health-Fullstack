import { Request, Response, NextFunction } from 'express';
import { dataSchema } from '../validators/validateMiddleware';

export const validateData = (req: Request, res: Response, next: NextFunction) => {
  const { error } = dataSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      is_success: false,
      message: error.details[0]?.message
    });
  }
  next();
};
