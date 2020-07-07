import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('espectaculos', table => {
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.string('cartaz') // Pôr só o nome do ficheiro com a extensão
        table.string('autor').notNullable()
        table.string('encenador').notNullable()
        table.string('actores').notNullable()
        table.string('cenografia').notNullable()
        table.string('figurinos').notNullable()
        table.string('desenhoDeLuz').notNullable()
        table.integer('sala').notNullable().references('nome').inTable('salas')
        table.integer('edificio').notNullable().references('edificio').inTable('salas')
        table.integer('cidade').notNullable().references('edificio').inTable('salas')
        table.string('estreia').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('espectaculos')
}