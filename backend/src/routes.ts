import express, { Router, Request, Response } from 'express'
import SalasController from './controllers/SalasController'
import EspectaculosController from './controllers/EspectaculosController'


const routes = express.Router()
const salasController = new SalasController()
const espectaculosController = new EspectaculosController()

//npm run dev

routes.get('/', (Request, Response) => {
    return Response.json('VIVA O SPORTING CLUBE DE PORTUGAL!!')
})

//Espectáculos
routes.get('/espectaculos', espectaculosController.index)
routes.get('/espectaculos/:id', espectaculosController.show)
routes.post('/espectaculos', espectaculosController.create)

//Sala
routes.get('/salas', salasController.index)
routes.get('/salas/:id', salasController.show)
routes.post('/salas', salasController.create)


export default routes