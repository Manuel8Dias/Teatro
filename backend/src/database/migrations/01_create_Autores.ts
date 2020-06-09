import Knex from 'knex'

export async function autor(knex: Knex) {
    return knex.schema.createTable('autores', table => {
        table.increments('id').primary()
        table.string('nome').notNullable
        table.string('biografia').notNullable
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('autores')
}