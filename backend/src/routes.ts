import express, { Router, Request, Response } from 'express'
import AutoresController from './controllers/AutoresController';
import EncenadoresController from './controllers/EncenadoresController';

const routes = express.Router()
const autoresController = new AutoresController()
const encenadoresController = new EncenadoresController()

//npm run dev

routes.get('/', (Request, Response) => {
    return Response.json('SPORTING CLUBE DE PORTUGAL!!')
})

//Espectáculos

//Autores
routes.get('/autores', autoresController.index)

//Encenadores
routes.get('/encenadores', encenadoresController.index)

//Actores

//Cenografia

//Fifurinos

//Desenho de Luz

//Sala


export default routes;