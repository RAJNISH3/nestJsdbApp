import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions  = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true // usevit only for local development, if true it will recreate database every time at start of application
}

export default config;