import { Request, Response } from 'express'
import knex from '../database/connection'

class AutoresController {
    async index(request: Request, response: Response) {
        const autores = await knex('autores').select('*')

        const serializedAutores = autores.map(autor => {
            return{
                id: autor.id,
                nome: autor.nome,
                biografia: autor.biografia,
            }
        })
        return response.json(serializedAutores)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const autor = await knex('autores').where('id', id).first()

        if(!autor) {
            return response.status(400).json({ message: 'Autor não encontrado!' })
        }
        
        return response.json(autor)
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            biografia,
        } = request.body

        const trx = await knex.transaction()

        const autor = {
            nome,
            biografia
        }

        const insertedIds = await trx('autores').insert(autor)

        const autor_id = insertedIds[0]

        await trx.commit()

        return response.json({ id: autor_id, ...autor})
    }
}

export default AutoresController
