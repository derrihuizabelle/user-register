import Sequelize from 'sequelize';
import DatabaseConfigs from '../config/database';

// Models
import User from '../app/models/User';

// Buffer
const models = [User];

// Enviroment
const env = process.env.NODE_ENV;

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // Start conection
    this.connection = new Sequelize(DatabaseConfigs[env]);

    // In each model, the connection is estabilished
    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
