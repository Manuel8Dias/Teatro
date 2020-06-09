import Knex from 'knex'

export async function actor(knex: Knex) {
    return knex.schema.createTable('actores', table => {
        table.increments('id').primary()
        table.string('nome').notNullable
        table.string('biografia').notNullable
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('actores')
}