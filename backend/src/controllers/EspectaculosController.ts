import { Request, Response } from 'express'
import knex from '../database/connection'

class EspectaculosController {
    
    async index(request: Request, response: Response) {
        const espectaculos = await knex('espectaculos').select('*')

        const serializedEspectaculos = espectaculos.map( espectaculo =>{
            return {
                id: espectaculo.id,
                cartaz: `http://localhost:3333/uploads/${espectaculo.cartaz}`,
                autor: espectaculo.autor,
                encenador: espectaculo.encenador,
                actores: espectaculo.actores,
                cenografia: espectaculo.cenografia,
                figurinos: espectaculo.figurinos,
                desenhoDeLuz: espectaculo.desenhoDeLuz,
                sala: espectaculo.sala,
                edificio:espectaculo.edificio,
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
        const {
            cartaz,
            autor,
            encenador,
            actores,
            cenografia,
            figurinos,
            desenhoDeLuz,
            sala,
            edificio,
            cidade,
            estreia,
        } = request.body

        const trx = await knex.transaction()

        const espectaculo = {
            cartaz,
            autor,
            encenador,
            actores,
            cenografia,
            figurinos,
            desenhoDeLuz,
            sala,
            edificio,
            cidade,
            estreia,
        }

        const isertedIds = await trx('espectaculos').insert(espectaculo)
        
        const espectaculos_id = isertedIds[0]

        trx.commit()

        return response.json({ id: espectaculos_id, ...espectaculo})
    }

    async apagar(request: Request, response: Response) {
        const { id } = request.params

        const espectaculo = await knex('espectaculos').where('id', id).del()

        if(!espectaculo) {
            return response.status(400).json({message: 'Espectáculo não encontrado!'})
        }

        return response.json({ message: 'Espectaculo apagado!'})
    }

    async actualizar(request: Request, response: Response) {
        const { id } = request.params

        const {
            cartaz,
            autor,
            encenador,
            actores,
            cenografia,
            figurinos,
            desenhoDeLuz,
            sala,
            edificio,
            cidade,
            estreia,
        }=  request.body

        const espectaculo = {
            cartaz,
            autor,
            encenador,
            actores,
            cenografia,
            figurinos,
            desenhoDeLuz,
            sala,
            edificio,
            cidade,
            estreia,
        }

        const espectaculoActualizado = await knex('espectaculos').where('id', id).update(espectaculo)

        if (!espectaculoActualizado) {
            return response.json({ message: 'Espectaculo não actualizada'})
        }

        return response.json(espectaculoActualizado)
    }
}

export default EspectaculosController