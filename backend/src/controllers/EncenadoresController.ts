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
        //FALTA
    }

    async create(request: Request, response: Response) {
        //FALTA
    }
}

export default EncenadoresController