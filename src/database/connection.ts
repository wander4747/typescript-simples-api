import "reflect-metadata"
import { DataSource } from "typeorm";

import dotenv from 'dotenv'
dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        __dirname + '/../**/*.entity.ts'
    ],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
              .then(() => console.log('connected success'))
              .catch((error) => console.log(error))

export default AppDataSource