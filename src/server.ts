import express from 'express';
import cors from 'cors';
import { Database } from './database';
import { router } from './routes';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
    this.connectionDb();
  }

  private router() {
    this.server.use(router);
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private async connectionDb() {
    await Database.getConnection();
    console.log('servidor conectado');
  }
}

// import express from 'express'

// //import express from 'express'
// //import { db } from './database/db'

// const app = express()

// // app.get('/', (req, res)=>{
// //     let SQL = "INSERT INTO movie (title, background_img, rating) values ('teste', 'img.png', 5.5)"

// //})

// app.listen(3000,()=>{
//    console.log('Server rodando')
// })

// import express from 'express'

// import Router from 'express';
// import { Sequelize } from 'sequelize/types';

// const app = express();

// const route = Router()

// app.use(express.json())

// route.get('/sendmovie', (req, res) => {
//   res.json({ message: 'hello world with Typescript' })

// })

// app.use(route)

// app.listen(3333, () => console.log('server running on port 3333'))
