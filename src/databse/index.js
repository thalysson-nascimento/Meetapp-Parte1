import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

/**
 * Arquivo responsável por manter a conexão com o banco de dados e carregar todas as models
 * */
const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();
