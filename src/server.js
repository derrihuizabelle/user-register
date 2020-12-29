import { errors } from 'celebrate';

import express from 'express';
import routes from './routes';
import './database';

require('dotenv').config();

class Server {
  constructor() {
    this.startup = express();
    this.middleware();
  }

  middleware() {
    this.startup.use(express.json());
    this.startup.use(routes);
    this.startup.use(errors());
  }
}

export default new Server().startup;
