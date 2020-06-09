import express, { Router, Request, Response } from 'express'

const routes = express.Router()

//npm run dev

routes.get('/', (Request, Response) => {
    return Response.json('SPORTING CLUBE DE PORTUGAL!!')
})

export default routes;