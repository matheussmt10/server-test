import { Sequelize } from 'sequelize-typescript';
import { Movie } from './models/Movie';

export class Database {
  public static async getConnection() {
    return new Sequelize({
      dialect: 'postgres',
      host: 'moviegenerator.cqg9xcnxcrnz.us-east-1.rds.amazonaws.com',
      username: 'postgres',
      password: 'Mathcode1!',
      database: 'dbMovieGenerator',
      port: 5432,
      models: [Movie],
      logging: false,
      retry: {
        max: 3
      }
    });
  }
}
