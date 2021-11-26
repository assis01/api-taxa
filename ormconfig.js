// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'db-taxa',
    entities: [path.join(__dirname, process.env.RUNNING ? 'dist':'src' ,'**','*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, process.env.RUNNING ? 'dist' : 'src', 'database', 'migrations', '*{.ts,.js}')],
    cli: { migrationsDir: path.join('src', 'database', 'migrations') },
    migrationsRun: true,
};