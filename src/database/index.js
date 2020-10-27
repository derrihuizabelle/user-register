import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

// Models
import User from '../app/models/User';

// Buffer
const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // start conection
    this.connection = new Sequelize(DatabaseConfig);

    // In each model, the connection is estabilished
    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
