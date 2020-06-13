import { Request, Response } from 'express'
import knex from '../database/connection'

class SalasController {

    async index(request: Request, response: Response) {
        const salas = await knex('salas').select('*')

        const serializedSalas = salas.map( sala => {
            return {
                id: sala.id,
                nome: sala.nome,
                edificio: sala.edificio,
                cidade: sala.cidade,
            }
        })

        return response.json(serializedSalas)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const sala = await knex('salas').where('id', id).first(
        )

        if(!sala) {
        return response.status(400).json({ message: 'Sala não encontrada!' })
        }

        return response.json(sala)
    }
    async create(request: Request, response: Response) {
        const {
            nome,
            edificio,
            cidade
        }=  request.body

        const trx = await knex.transaction()

        const sala = {
            nome,
            edificio,
            cidade,
        }

        const insertedIds = await trx('salas').insert(sala)

        const salas_id = insertedIds[0]

        await trx.commit()

        return response.json({ id: salas_id, ...sala })
    }

    async apagar(request: Request, response: Response) {
        const { id } = request.params

        const sala = await knex('salas').where('id', id).del()

        if(!sala) {
            return response.status(400).json({ message: 'Sala não encontrada!'})
        }

        return response.json({ message: 'Sala Apagada!'})
    }

    async actualizar(request: Request, response: Response) {
        const { id } = request.params

        const {
            nome,
            edificio,
            cidade
        }=  request.body

        const sala = {
            nome,
            edificio,
            cidade,
        }

        const salaActualizada = await knex('salas').where('id', id).update(sala)

        if (!salaActualizada) {
            return response.json({ message: 'Sala não actualizada'})
        }

        return response.json(salaActualizada)
    }
}

export default SalasController