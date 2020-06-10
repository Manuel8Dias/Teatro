import { Request, Response } from 'express'
import knex from '../database/connection'

class ActoresController {
    async index(request: Request, response: Response) {
        const actores = await knex('actores').select('*')

        const serializedActores = actores.map(actor => {
            return {
                id: actor.id,
                nome: actor.nome,
                biografia: actor.biografia,
            }
        })
        return response.json(serializedActores)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const actor = await knex('actores').where('id', id).first()

        if(!actor) {
            return response.status(400).json({ message: 'Actor não encontrado!'})
        }

        return response.json(actor)
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            biografia,
        } = request.body

        const trx = await knex.transaction()

        const actor ={
            nome,
            biografia
        }

        const insertedIds = await trx('actores').insert(actor)

        const actor_id = insertedIds[0]

        await trx.commit()

        return response.json({id: actor_id, ...actor})
    }
}

export default ActoresController