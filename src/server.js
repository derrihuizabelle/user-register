import express from 'express';
import routes from './routes';
import './database';

require('dotenv').config();

class Server {
  constructor() {
    this.startup = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.startup.use(express.json());
  }

  routes() {
    this.startup.use(routes);
  }
}

export default new Server().startup;
