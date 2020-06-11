import express, { Router, Request, Response } from 'express'
import SalasController from './controllers/SalasController'

const routes = express.Router()
const salasController = new SalasController()

//npm run dev

routes.get('/', (Request, Response) => {
    return Response.json('VIVA O SPORTING CLUBE DE PORTUGAL!!')
})

//Espectáculos


//Sala
routes.get('/salas', salasController.index)
routes.get('/sala/:id', salasController.show)
routes.post('/salas', salasController.create)


export default routes