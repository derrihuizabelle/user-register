import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';
import userStoreValidation from './app/middlewares/validators/UserStoreValidation';
import userGetByIdValidation from './app/middlewares/validators/UserGetByIdValidation';
import StoreSessionValidation from './app/middlewares/validators/StoreSessionValidation';

const router = new Router();

router.post('/new-user', userStoreValidation, UserController.store);

router.post('/login', StoreSessionValidation, SessionController.store);

router.get('/user-list', AuthMiddleware, UserController.index);

router.get(
  '/user-info',
  AuthMiddleware,
  userGetByIdValidation,
  UserController.show
);

router.put(
  '/update-user',
  AuthMiddleware,
  userStoreValidation,
  UserController.update
);

router.delete(
  '/delete-user',
  userGetByIdValidation,
  AuthMiddleware,
  UserController.delete
);

export default router;
