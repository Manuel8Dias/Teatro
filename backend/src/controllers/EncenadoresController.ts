import { Request, Response } from 'express'
import knex from '../database/connection'

class EncenadoresController {
    async index(request: Request, response: Response) {
        const encenadores = await knex('encenadores').select('*')

        const serializedEncenadores = encenadores.map(encenador => {
            return{
                id: encenador.id,
                nome: encenador.nome,
                biografia: encenador.biografia,
            }
        })
        return response.json(serializedEncenadores)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const encenador = await knex('encenadores').where('id', id).first()
        
        if(!encenador) {
            return response.status(400).json( {message: 'Encenador não encontrado!'})
        }

        return response.json(encenador)
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            biografia,
        } = request.body

        const trx = await knex.transaction()

        const encenador = {
            nome,
            biografia,
        }

        const insetedIds = await trx('encenadores').insert(encenador)
        
        const encenador_id = insetedIds[0]
        
        await trx.commit()

        return response.json({id: encenador_id, ...encenador})
    }
}

export default EncenadoresController