import Knex from 'knex'

export async function encenador(knex: Knex) {
    return knex.schema.createTable('encenadores', table => {
        table.increments('id').primary()
        table.string('nome').notNullable
        table.string('biografia').notNullable
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('encenadores')
}