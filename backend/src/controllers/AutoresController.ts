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
        //FALTA
    }

    async create(request: Request, response: Response) {
        //FALTA
    }
}

export default AutoresController
