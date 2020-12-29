import { errors } from 'celebrate';

import express from 'express';
import routes from './routes';
import './database';

require('dotenv').config();

class Server {
  constructor() {
    this.startup = express();
    this.middleware();
    this.routes();
    this.celebrate();
  }

  middleware() {
    this.startup.use(express.json());
  }

  routes() {
    this.startup.use(routes);
  }

  celebrate() {
    this.startup.use(errors());
  }
}

export default new Server().startup;
