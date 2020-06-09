import Knex from 'knex'

export async function expectaculo(knex: Knex) {
    return knex.schema.createTable('iluminadores', table => {
        table.increments('id').primary()
        table.string('cartaz')
        table.integer('autor').notNullable().references('nome').inTable('autores')
        table.integer('encenador').notNullable().references('nome').inTable('encenadores')
        table.integer('actor').notNullable().references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('actor').references('nome').inTable('actores')
        table.integer('cenografia').notNullable().references('nome').inTable('cenografia')
        table.integer('figurinos').notNullable().references('nome').inTable('figurinos')
        table.integer('desenho de luz').notNullable().references('nome').inTable('iluminadores')
        table.integer('sala').notNullable().references('salas').inTable('salas')
        table.integer('edificio').notNullable().references('edificio').inTable('salas')
        table.string('estreia').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('iluminadores')
}