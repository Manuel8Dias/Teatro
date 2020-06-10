import express, { Router, Request, Response } from 'express'
import AutoresController from './controllers/AutoresController'
import EncenadoresController from './controllers/EncenadoresController'
import ActoresController from './controllers/ActoresController'
import CenografiaController from './controllers/CenografiaController'

const routes = express.Router()
const autoresController = new AutoresController()
const encenadoresController = new EncenadoresController()
const actoresController = new ActoresController()
const cenografiaController = new CenografiaController()

//npm run dev

routes.get('/', (Request, Response) => {
    return Response.json('VIVA O SPORTING CLUBE DE PORTUGAL!!')
})

//Espectáculos

//Autores
routes.get('/autores', autoresController.index)
routes.get('/autores/:id', autoresController.show)
routes.post('/autores', autoresController.create)

//Encenadores
routes.get('/encenadores', encenadoresController.index)
routes.get('/encenadores/:id', encenadoresController.show)
routes.post('/encenadores', encenadoresController.create)

//Actores
routes.get('/actores', actoresController.index)
routes.get('/actores/:id', actoresController.show)
routes.post('/actores', actoresController.create)

//Cenografia
routes.get('/cenografia', cenografiaController.index)
routes.get('/cenografia/:id', cenografiaController.show)
routes.post('/cenografia', cenografiaController.create)

//Fifurinos

//Desenho de Luz

//Sala


export default routes;