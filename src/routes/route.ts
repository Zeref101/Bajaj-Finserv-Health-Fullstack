import { Router } from 'express';
import { processData } from '../controllers/data.controller';
import { validateData } from '../middleware/validatorMiddleware';

const router = Router();

router.post('/', validateData, processData);

export default router;
