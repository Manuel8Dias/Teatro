import { Request, Response, request } from 'express'
import knex from '../database/connection'

class CenografiaController {
    async index(request: Request, response: Response) {
        const cenografos = await knex('cenografia').select('*')

        const serializedCenografos = cenografos.map(cenografo => {
            return{
                id: cenografo.id,
                nome: cenografo.nome,
                biografia: cenografo.biografia,
            }
        })
        return response.json(serializedCenografos)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const cenografo = await knex('cenografia').where('id', id).first()

        if(!cenografo) {
            return response.status(400).json({ message: 'Cenografo não encontrado!'})
        }

        return response.json(cenografo)
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            biografia,
        } = request.body

        const trx = await knex.transaction()

        const cenografo ={
            nome,
            biografia,
        }

        const insertedIds = await trx('cenografia').insert(cenografo)

        const cenografia_id = insertedIds[0]

        await trx.commit()

        return response.json({ id: cenografia_id , ...cenografo })
    }
}

export default CenografiaController