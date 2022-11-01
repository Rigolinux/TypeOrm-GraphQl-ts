import { DataSource } from "typeorm";

//entities
import { User } from "../Entities/User";

//enviroment variables
import {database,host,password,username} from '../Env'

export const conection = new DataSource({
    type: "mysql",
    host: host,
    username: username,
    password: password,
    port: 30306,
    database: database,
    entities: [User],
    synchronize: true,
    ssl: false,
  })

