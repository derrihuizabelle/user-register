import { Joi, Segments } from 'celebrate';

const createUser = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

const updateUser = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6),
  }),
};

const getUser = {
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const login = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

export { createUser, updateUser, getUser, login };
