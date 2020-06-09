import Knex from 'knex'

export async function sala(knex: Knex) {
    return knex.schema.createTable('salas', table => {
        table.increments('id').primary()
        table.string('sala').notNullable
        table.string('edificio').notNullable
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('salas')
}