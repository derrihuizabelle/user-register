import { Router } from 'express';
import { celebrate } from 'celebrate';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';
import {
  createUser,
  updateUser,
  getUser,
  login,
} from './app/middlewares/validators/UserValidators';

const router = new Router();

router.post('/new-user', celebrate(createUser), UserController.store);

router.post('/login', celebrate(login), SessionController.store);

router.get('/user-list', AuthMiddleware, UserController.index);

router.get(
  '/user-info',
  celebrate(getUser),
  AuthMiddleware,
  UserController.show
);

router.put(
  '/update-user',
  celebrate(updateUser),
  AuthMiddleware,
  UserController.update
);

router.delete(
  '/delete-user',
  celebrate(getUser),
  AuthMiddleware,
  UserController.delete
);

export default router;
