import express, { Router } from 'express'
import SalasController from './controllers/SalasController'
import EspectaculosController from './controllers/EspectaculosController'


const routes = express.Router()
const salasController = new SalasController()
const espectaculosController = new EspectaculosController()

//npm run dev

routes.get('/', espectaculosController.index)

//Espectáculos
routes.get('/espectaculos', espectaculosController.index)
routes.get('/espectaculos/:id', espectaculosController.show)
routes.post('/espectaculos', espectaculosController.create)
routes.delete('/espectaculos/:id', espectaculosController.apagar)
routes.put('/espectaculos/:id', espectaculosController.actualizar)

//Sala
routes.get('/salas', salasController.index)
routes.get('/salas/:id', salasController.show)
routes.post('/salas', salasController.create)
routes.delete('/salas/:id', salasController.apagar)
routes.put('/salas/:id', salasController.actualizar)

export default routes