import { Request, Response } from 'express'
import knex from '../database/connection'

class EspectaculosControiller {
    
    async index(request: Request, response: Response) {
        const espectaculos = await knex('espectaculos').select('*')

        const serializedEspectaculos = espectaculos.map( espectaculo =>{
            return {
                id: espectaculo.id,
                cartaz: espectaculo.cartaz,
                autor: espectaculo.autor,
                encenador: espectaculo.encenador,
                actores: espectaculo.actores,
                cenografia: espectaculo.cenografia,
                figurinos: espectaculo.figurinos,
                desenhoDeLuz: espectaculo.desenhoDeLuz,
                sala: espectaculo.sala,
                cidade: espectaculo.cidade,
                estreia: espectaculo.estreia,
            }
        })

        return response.json(serializedEspectaculos)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const espectaculo = await knex('espectaculos').where('id', id).first()

        if(!espectaculo) {
            return response.status(400).json({ message: 'Espectáculo não encontrado!'})
        }

        return response.json(espectaculo)
    }

    async  create(request: Request, response: Response) {
        //FALTA!!
    }
}

export default EspectaculosControiller