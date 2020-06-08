import * as dotenv from 'dotenv'
import knex from 'knex'

dotenv.config()

export const queryBuilder = knex({
    client: 'mysql2',
    connection: {
        host:process.env.DB_HOST,
        user:process.env.DB_User,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME
    }
})