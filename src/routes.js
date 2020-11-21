import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

// put the token on Bearer -> token

const router = new Router();

router.get('/test', (req, res) => {
  return res
    .status(200)
    .json({ message: 'Uss Enterprise to starfleet command, were online!' });
});

router.get('/user-info', AuthMiddleware, (req, res) => {
  return UserController.show(req, res);
});

router.get('/user-list', AuthMiddleware, (req, res) => {
  return UserController.index(req, res);
});

router.post('/new-user', (req, res) => {
  return UserController.store(req, res);
});

router.post('/login', SessionController.store);

router.put('/update-user', AuthMiddleware, (req, res) => {
  return UserController.update(req, res);
});

router.delete('/delete-user', AuthMiddleware, (req, res) => {
  return UserController.delete(req, res);
});

export default router;
