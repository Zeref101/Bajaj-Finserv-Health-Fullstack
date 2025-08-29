import Joi from 'joi';

export const dataSchema = Joi.object({
  data: Joi.array().items(Joi.string()).required()
});
