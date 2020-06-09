import Knex from 'knex'

export async function luz(knex: Knex) {
    return knex.schema.createTable('iluminadores', table => {
        table.increments('id').primary()
        table.string('nome').notNullable
        table.string('biografia').notNullable
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('iluminadores')
}